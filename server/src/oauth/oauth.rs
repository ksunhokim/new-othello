use std::collections::HashMap;
use oauth2::prelude::*;
use url::{Url};
use oauth2::basic::BasicClient;
use oauth2::{AuthUrl, ClientId, ClientSecret, CsrfToken, TokenUrl};

pub struct OauthManager {
    callback: String,
    clients: HashMap<&'static str, BasicClient>,
}

pub fn create_client(key: &str, secret: &str, auth_url: &str, token_url: &str) -> BasicClient {
    let key2 = ClientId::new(key.to_owned());
    let secret2 = ClientSecret::new(secret.to_owned());
    let auth_url2 = AuthUrl::new(Url::parse(auth_url).expect("Invalid auth_url"));
    let token_url2 = TokenUrl::new(Url::parse(token_url).expect("Invalid token_url"));
    BasicClient::new(key2, Some(secret2), auth_url2, Some(token_url2))
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

    pub fn authorize_url(&mut self, name: &str) -> Result<String, ()> {
        match self.clients.get(name) {
            Some(client) => {
                let (url, state) = client.authorize_url(CsrfToken::new_random);
                Ok(url.to_string())
            },
            None => Err(())
        }
    }
}