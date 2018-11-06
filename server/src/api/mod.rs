use rocket::response::status::BadRequest;
use rocket_contrib::json::Json;

mod oauth;

pub use self::oauth::routes as oauth_routes;