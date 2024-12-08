<script>
  import Tag from '@/components/ui/Tag.svelte'
  import Hamburger from '@/components/appbar/Hamburger.svelte'
  import { base } from '$app/paths'
</script>

<header>
  <div class="container">
    <div class="logo">helpers plugin</div>
    <div class="right">
      <a href={base + '/'}>
        <button class="preview">See live</button>
      </a>
      <div class="links">
        <a href="https://www.npmjs.com/package/helpers-plugin">
          <button>
            <img src="/npm.svg" alt="npm" />
          </button>
        </a>
        <a href="https://github.com/przemyslawdrzewicz/helpers-plugin">
          <button>
            <img src="/github.svg" alt="github" />
          </button>
        </a>
      </div>
      <div class="version">
        <Tag small type="primary">1.0.8</Tag>
      </div>
      <div class="hamburger">
        <Hamburger />
      </div>
    </div>
  </div>
</header>

<style>
  header {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background: #0c142cf5;
  }

  .container {
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger {
    display: none;
  }

  @media (max-width: 800px) {
    header {
      padding: 0 20px;
    }

    .container {
      width: 100% !important;
    }

    .version {
      display: none;
    }

    .links {
      display: none !important;
    }

    .hamburger {
      display: block !important;
    }
  }

  .logo {
    color: #0ffa98;
    font-size: 26px;
    font-weight: 300;
  }

  .right {
    display: flex;
    align-items: center;
  }

  .links {
    display: flex;
    margin-right: 20px;
  }

  button {
    background: transparent;
    border: 0;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .preview {
    margin-right: 10px;
    color: rgb(255, 255, 255);
    font-weight: 400;
    font-size: 16px;
  }

  .preview:hover {
    color: #0ffa98;
  }

  a {
    text-decoration: none;
  }
</style>
