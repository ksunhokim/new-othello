lazy_static! {
    pub static ref CONFIG: Config = Config::load();
}

#[derive(Debug)]
pub struct Config {
    pub database_url: String,
    pub oauth_callback: String,
}

impl Config {
    fn load() -> Self {
        use util::{get_env_or};
        dotenv::dotenv().ok();

        Config {
            database_url: get_env_or("DATABASE_URL", "".to_string()),
            oauth_callback: get_env_or("OAUTH_CALLBACK", "".to_string()),
        }
    }
}