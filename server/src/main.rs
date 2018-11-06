#![feature(proc_macro_hygiene, custom_attribute, custom_derive, decl_macro, try_trait)]
#![allow(proc_macro_derive_resolution_fallback)] 
#[macro_use]
extern crate rocket;
#[macro_use]
extern crate diesel;
#[macro_use]
extern crate diesel_migrations;
#[macro_use]
extern crate lazy_static;
extern crate dotenv;
extern crate rocket_contrib;
extern crate oauth2;

mod api;
mod oauth;
mod db;
mod config;
mod util;

use oauth::OauthManager;
use config::CONFIG;

fn main() {
    rocket::ignite()
        .mount("/", api::oauth_routes())
        .manage(create_oauth_manager())
        .launch();
}

fn create_oauth_manager() -> OauthManager {
    OauthManager::new(&CONFIG.oauth_callback)
}
