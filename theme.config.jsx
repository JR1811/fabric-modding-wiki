import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

/** @type {import("nextra-theme-docs/.").DocsThemeConfig} */
export default {
  logo: (
    <span class="flex flex-row gap-4">
      <img
        class="align-baseline"
        width="21"
        height="21"
        src="/icon.svg"
      />
      <span class="hide-logo-text">Fabric Modding Wiki</span>
    </span>
  ),
  project: {
    link: "https://github.com/moddedmc-wiki/fabric-modding-wiki",
  },
  chat: {
    link: "https://discord.gg/5tmestARuU",
  },
  docsRepositoryBase:
    "https://github.com/moddedmc-wiki/fabric-modding-wiki/blob/main/",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icon_full.png" />
    </>
  ),
  useNextSeoProps: () => {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    /** @type {import("next-seo").NextSeoProps} */
    let seoProps = {};

    if (route !== "/" || !frontMatter.title) {
      seoProps.title = `${frontMatter.title} - Fabric Modding Wiki`;
    } else {
      seoProps.title = "Fabric Modding Wiki";
    }

    seoProps.description =
      frontMatter.description ||
      "An open source guide-book for creating mods using Fabric.";

    seoProps.openGraph = {
      images: [
        {
          type: "image/png",
          alt: "Cover Image",
          url: `/icon_full.png`,
        },
      ],
    };

    seoProps.twitter = {
      cardType: "app",
    };

    return seoProps;
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: "dark"
  },
  primaryHue: {
    dark: 24
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
    extraContent: () => {
      return <></>;
    },
  },
  footer: {
    text: (
      <span>
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International{" "}
        {new Date().getFullYear()} ©{" "}
        <a href="https://mineblock11.dev/" target="_blank">
          Calum H. (mineblock11)
        </a>
        <br />
        Not affliated with Mojang or the Fabric Project.
      </span>
    ),
  },
};
