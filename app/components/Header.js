import { SignOutButton, auth } from "@clerk/nextjs"

const Header = async ({ username }) => {
    const { userId } = auth();
    return (
        <div>
            <header>
                <div class="logo">
                    <img src="images/news_logo.png" alt="Logo"></img>
                        <h1>Multilingual News</h1>
                </div>
                <nav>
                    <ul>
                    <li><a href="/">Home</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/articles">Articles</a></li>
                        
                        {!userId && (<li><a href="/login">Login</a></li>)}
                        {userId && (<li ><SignOutButton className="custom-signout-button" /></li>)}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header