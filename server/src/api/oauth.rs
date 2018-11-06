use oauth::OauthManager;
use rocket::Route;
use rocket::{Outcome, Request, State};
use rocket::response::Redirect;
use rocket::response::status::NotFound;

pub fn routes() -> Vec<Route> {
    routes![login]
}

#[get("/login/<provider>")]
fn login(provider: String, state: State<OauthManager>) -> Result<Redirect, NotFound<()>> {
    match state.inner().authorize_url(&provider) {
        Ok(url) => Ok(Redirect::to(url)),
        Err(_) => Err(NotFound(()))
    }
}