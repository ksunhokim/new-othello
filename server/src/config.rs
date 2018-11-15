lazy_static! {
    pub static ref CONFIG: Config = Config::load();
}

#[derive(Debug)]
pub struct Config {
    pub database_url: String,
    pub domain: String,
    pub discord_key: Option<String>,
    pub discord_secret: Option<String>,
}

impl Config {
    fn load() -> Self {
        use util::{get_env_or, get_env};
        dotenv::dotenv().ok();

        Config {
            database_url: get_env_or("DATABASE_URL", "".to_string()),
            domain: get_env_or("DOMAIN", "".to_string()),
            discord_key: get_env("DISCORD_KEY"),
            discord_secret: get_env("DISCORD_SECRET"),
        }
    }
}