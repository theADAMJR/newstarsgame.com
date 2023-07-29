import './roadmap.css';

export const metadata = {
  title: 'New Stars - Roadmap',
}

export function A(params: any)
{
  return (
    <div className="body">
      <small> {params.children}</small>
      <div className="d-flex justify-content-between mt-3 controls">
        <a className="btn btn-outline-danger invisible" href="#">Prev</a>
        <a className="btn btn-outline-danger" href="#">Next</a>
      </div>
    </div>
  );
}

// Template: https://codepen.io/AlexVanK/full/qBaeBYV
export default function Roadmap() {
  return (
    <div className="h-100 w-100 py-4">
      <div className="d-flex justify-content-center align-items-center flex-column mb-4">
        <h1 className="mb-2 text-white text-center">Infographic Roadmap</h1>
        <p className="w-75 text-white text-center">ES6 — Bootstrap 5.3 — FontAwesome 6.4</p>
        <p className="w-75 text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <main id="infographic" className="d-flex flex-column align-items-center py-5">
        <section className="step one text-danger">
          <div className="circle">
            <i className="fa-solid fa-meteor display-1 mb-3" />
            <h4>STEP 1</h4>INITIAL DEVELOPMENT
          </div>
          <article data-step={1}>
            <header className="d-flex align-items-center bg-danger bg-opacity-10">
              <i className="fa-solid fa-meteor bg-danger" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>

          </article>
          <article data-step={2}>
            <header className="d-flex align-items-center text-danger bg-danger bg-opacity-10">
              <i className="fa-solid fa-meteor bg-danger" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-danger" href="#">Prev</a>
                <a className="btn btn-outline-danger" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={3}>
            <header className="d-flex align-items-center text-danger bg-danger bg-opacity-10">
              <i className="fa-solid fa-meteor bg-danger" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-danger" href="#">Prev</a>
                <a className="btn btn-outline-danger" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={4}>
            <header className="d-flex align-items-center text-danger bg-danger bg-opacity-10">
              <i className="fa-solid fa-meteor bg-danger" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-danger" href="#">Prev</a>
                <a className="btn btn-outline-danger" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={5}>
            <header className="d-flex align-items-center text-danger bg-danger bg-opacity-10">
              <i className="fa-solid fa-meteor bg-danger" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-danger" href="#">Prev</a>
                <a className="btn btn-outline-danger" href="#">Next</a>
              </div>
            </div>
          </article>
        </section>
        <section className="step two text-warning">
          <div className="circle">
            <i className="fa-solid fa-cookie-bite display-1 mb-3" />
            <h4>STEP 2.</h4>PLAYTESTING
          </div>
          <article data-step={6}>
            <header className="d-flex align-items-center text-warning bg-warning bg-opacity-10">
              <i className="fa-solid fa-cookie-bite bg-warning" />
              <h6 className="text-uppercase my-3 pe-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-warning" href="#">Prev</a>
                <a className="btn btn-outline-warning" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={7}>
            <header className="d-flex align-items-center text-warning bg-warning bg-opacity-10">
              <i className="fa-solid fa-cookie-bite bg-warning" />
              <h6 className="text-uppercase my-3 pe-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-warning" href="#">Prev</a>
                <a className="btn btn-outline-warning" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={8}>
            <header className="d-flex align-items-center text-warning bg-warning bg-opacity-10">
              <i className="fa-solid fa-cookie-bite bg-warning" />
              <h6 className="text-uppercase my-3 pe-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-warning" href="#">Prev</a>
                <a className="btn btn-outline-warning" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={9}>
            <header className="d-flex align-items-center text-warning bg-warning bg-opacity-10">
              <i className="fa-solid fa-cookie-bite bg-warning" />
              <h6 className="text-uppercase my-3 pe-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-warning" href="#">Prev</a>
                <a className="btn btn-outline-warning" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={10}>
            <header className="d-flex align-items-center text-warning bg-warning bg-opacity-10">
              <i className="fa-solid fa-cookie-bite bg-warning" />
              <h6 className="text-uppercase my-3 pe-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-warning" href="#">Prev</a>
                <a className="btn btn-outline-warning" href="#">Next</a>
              </div>
            </div>
          </article>
        </section>
        <section className="step three text-success">
          <div className="circle">
            <i className="fa-solid fa-ghost display-1 mb-3" />
            <h4>STEP 3.</h4>EARLY-ACCESS
          </div>
          <article data-step={11}>
            <header className="d-flex align-items-center text-success bg-success bg-opacity-10">
              <i className="fa-solid fa-ghost bg-success px-3" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-success" href="#">Prev</a>
                <a className="btn btn-outline-success" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={12}>
            <header className="d-flex align-items-center text-success bg-success bg-opacity-10">
              <i className="fa-solid fa-ghost bg-success px-3" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-success" href="#">Prev</a>
                <a className="btn btn-outline-success" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={13}>
            <header className="d-flex align-items-center text-success bg-success bg-opacity-10">
              <i className="fa-solid fa-ghost bg-success px-3" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-success" href="#">Prev</a>
                <a className="btn btn-outline-success" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={14}>
            <header className="d-flex align-items-center text-success bg-success bg-opacity-10">
              <i className="fa-solid fa-ghost bg-success px-3" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-success" href="#">Prev</a>
                <a className="btn btn-outline-success" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={15}>
            <header className="d-flex align-items-center text-success bg-success bg-opacity-10">
              <i className="fa-solid fa-ghost bg-success px-3" />
              <h6 className="text-uppercase my-3 ps-4">Lorem Ipsum dolor sit Amet</h6>
            </header>
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-success" href="#">Prev</a>
                <a className="btn btn-outline-success" href="#">Next</a>
              </div>
            </div>
          </article>
          <article data-step={16}>
            <header className="d-flex align-items-center text-success bg-success bg-opacity-10">
              <i className="fa-solid fa-flag-checkered bg-success display-2 p-4" />
              <h6 className="text-uppercase my-3 ps-4">Early Access</h6>
            </header>
            <h6 className="text-uppercase my-3 ps-4" />
            <div className="body">
              <small> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </small>
              <div className="d-flex justify-content-between mt-3 controls">
                <a className="btn btn-outline-success" href="#">Prev</a>
                <a className="btn btn-outline-success invisible" href="#">Next</a>
              </div>
            </div>
          </article>
        </section>
      </main>
      <script src="/js/roadmap.js" defer />
    </div>
  );
};