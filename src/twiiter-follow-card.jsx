export function TwitterFollowCard ({ username, name, isFollowing }) {
    return(
    <main>
        <article className="tw-container">
            <header className="tw-container-user">
                <img 
                    className="tw-avatar"
                    src="https://i.blogs.es/09b647/googlefotos/1366_2000.jpg" alt="foto dni" />
                <div className="tw-usuario">
                    <strong> {name} </strong>
                    <span className="username">@{ username }</span>
                </div>
            </header>

            <aside className="tw-aside">
                <button className="tw-button">
                    Seguir
                </button>
            </aside>
        </article>
    </main>
    )
}