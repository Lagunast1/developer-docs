/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  bittensorSidebar: [
    // 	{
    // 	type: 'link',
    // 	href: 'https://docs.bittensor.com',
    // 	label: "Search",
    // 	className: 'sidebarSearch', //  based on Class name it will add search component
    // },
    "index",
    "whats-new-in-docs",
    {
      type: "category",
      label: "Learn Bittensor Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "learn/introduction",
        "learn/bittensor-building-blocks",
        "learn/anatomy-of-incentive-mechanism",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/installation",
        "getting-started/wallets",
        "getting-started/running-a-public-subtensor",
      ],
    },
    {
      type: "category",
      label: "Validating and Mining",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/checklist-for-validating-mining",
        "subnets/register-validate-mine",
      ],
    },
    {
      type: "category",
      label: "Subnet Tutorials",
      collapsible: true,
      collapsed: false,
      items: [
        "tutorials/basic-subnet-tutorials",
        "tutorials/ocr-subnet-tutorial",
      ],
    },
    {
      type: "category",
      label: "Subnets",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/create-a-subnet", 
        "subnets/subnet-hyperparameters",
        "subnets/working-with-subnets",
        "subnets/code-walkthrough-text-prompting",
      ],
    },
    {
      type: "category",
      label: "Subnet Pages",
      link: {type: "doc", id: "subnet-pages/index",},
      collapsible: true,
      collapsed: true,
      items: [
        "subnet-pages/subnet-0",
        "subnet-pages/subnet-1",
        "subnet-pages/subnet-2",
        "subnet-pages/subnet-3",
        "subnet-pages/subnet-4",
        "subnet-pages/subnet-5",
        "subnet-pages/subnet-6",
        "subnet-pages/subnet-7",
        "subnet-pages/subnet-8",
        "subnet-pages/subnet-9",
        "subnet-pages/subnet-10",
        "subnet-pages/subnet-11",
        "subnet-pages/subnet-12",
        "subnet-pages/subnet-13",
        "subnet-pages/subnet-14",
        "subnet-pages/subnet-15",
        "subnet-pages/subnet-16",
        "subnet-pages/subnet-17",
        "subnet-pages/subnet-18",
        "subnet-pages/subnet-19",
        "subnet-pages/subnet-20",
        "subnet-pages/subnet-21",
        "subnet-pages/subnet-22",
        "subnet-pages/subnet-23",
        "subnet-pages/subnet-24",
        "subnet-pages/subnet-25",
        "subnet-pages/subnet-26",
        "subnet-pages/subnet-27",
        "subnet-pages/subnet-28",
        "subnet-pages/subnet-29",
        "subnet-pages/subnet-30",
        "subnet-pages/subnet-31",
        "subnet-pages/subnet-32",
      ],
    },
    "btcli",
    "bt-api-ref",
    "emissions",
    // "reference/bittensor-api-ref",
    {
      type: "category",
      label: "Staking",
      collapsible: true,
      collapsed: false,
      items: ["staking/staking-polkadot-js"],
    },
    "delegation",
    "yuma-consensus",
    "governance",
    "senate",
    "glossary",
  ],
};

module.exports = sidebars;
