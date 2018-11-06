use db::schema::users;

#[derive(Debug, Identifiable, Queryable, Insertable)]
pub struct User {
    pub id: i32,
    pub oauth_provider: String,
    pub oauth_id: String,
}