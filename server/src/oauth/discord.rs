use oauth::create_client;
use oauth2::basic::BasicClient;

pub fn discord_client(key: &str, secret: &str) -> BasicClient {
    create_client(key, secret, "https://discordapp.com/api/oauth2/authorize", "https://discordapp.com/api/oauth2/token")
}