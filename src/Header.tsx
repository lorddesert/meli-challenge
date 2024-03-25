import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  function handleSubmit(e: any) {
    e.preventDefault()

    const searchQuery = e.target[0].value

    navigate(`/items?search=${searchQuery}`)

  }

  return <header>
    <Link to="/">
      <svg width="448" height="621" viewBox="0 0 448 621" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M287.399 275.676C317.558 250.731 330.922 103.315 343.977 50.3249C357.033 -2.6648 411.027 0.0227954 411.027 0.0227954C411.027 0.0227954 397.009 24.4176 402.727 42.6222C408.444 60.8267 447.612 77.0994 447.612 77.0994L439.165 99.3704C439.165 99.3704 421.524 97.114 411.027 118.112C400.53 139.109 424.177 344.885 424.177 344.885C424.177 344.885 354.684 471.46 354.684 524C354.684 576.539 379.552 620.572 379.552 620.572H344.655C344.655 620.572 293.462 559.65 282.963 529.203C272.464 498.757 276.662 468.31 276.662 468.31C276.662 468.31 221.017 465.161 171.674 468.31C122.331 471.46 89.4239 513.876 83.4849 537.603C77.5459 561.329 75.0859 620.572 75.0859 620.572H47.4931C30.6987 568.744 17.3603 550.169 24.5963 524C44.6393 451.512 40.7023 410.399 36.0616 392.088C31.4209 373.776 0 357.794 0 357.794C15.3916 326.436 31.1027 311.368 98.6838 309.796C166.265 308.225 257.239 300.62 287.399 275.676Z" fill="#EC4815" />
        <path d="M106.714 520.964C106.714 520.964 113.844 586.948 151.724 620.573H184.186C151.724 583.798 148.184 487.941 148.184 487.941C131.673 493.317 108.814 512.565 106.714 520.964Z" fill="#EC4815" />
      </svg>
    </Link>

    <nav>
      <form onSubmit={handleSubmit} role="search">
        <div className="search-bar-container">
          <input type="search" className="search-bar" placeholder="Chocolate..." />
          <button style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
        </div>
      </form>
    </nav>
  </header>
}