use db::models::User;
use std::collections::HashMap;
use rocket::request::{self, FromRequest};
use rocket::{Outcome, Request, State};
use rocket::http::Status;
use oauth2::basic::BasicClient;
use oauth2::{AuthUrl, CsrfToken, TokenUrl};

pub struct OauthManager {
    callback: String,
    clients: HashMap<&'static str, BasicClient>,
}

impl OauthManager {
    pub fn new(callback: &str) -> Self {
        Self {
            callback: callback.to_owned(),
            clients: HashMap::new(),
        }
    }

    pub fn add(&mut self, name: &'static str, client: BasicClient) -> &Self {
        self.clients.insert(name, client);
        self
    }

    pub fn authorize_url(&self, name: &str) -> Result<String, ()> {
        match self.clients.get(name) {
            Some(client) => {
                let (url, _) = client.authorize_url(CsrfToken::new_random);
                Ok(url.to_string())
            },
            None => Err(())
        }
    }
}