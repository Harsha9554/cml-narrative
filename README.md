# cml-narrative

![logo](/static/img/logos/SPOT-logo.svg)
This repository contains the narrative web app portion of the CML project.

## About

This project is being developed by the IDEA Lab at Clemson University.

## Infrastructure 

The narrative portion of this application is built using Svelte (and implementing SvelteKit). The project is built using a combination of Svelte and Typescript, however regular Javascript can be used. It also uses Tailwind CSS to handle styling.

## Building, Running, and Testing Locally

To run this application locally, you will need to have the following installed on your machine:

- Node and NPM
    - [How to install NodeJS and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Git
    - [How to install Git](https://github.com/git-guides/install-git)



### Cloning the repository
Once Git is installed, you will need to clone this repository on your machine.

Using the Terminal, or Command Prompt, navigate to the desired directory in which you would like to clone the repository. Run the following command:

```git clone https://github.com/IDEA-Lab-Clemson-University/cml-narrative```

This will create a new folder in your current working directory called `cml-narrative`. Navigate into it by running `cd cml-narrative`

### Installing proper dependencies

Once in the `cml-narrative` directory AND Node and npm are installed, run the command `cd application` to enter the directory in which the actual application lives. Once there, run `npm install` to install the required dependencies. This may take a while if it is the first time running. 

### Running the application

Once you have installed the dependencies, you can run `npm run dev` to start the development server. You should receive a message in the terminal once the server is up and running. You can then navigate to [http://localhost:5173](http://localhost:5173) in your browser to access the application.

When you are ready to close the application, you can `CTRL+C` in the terminal to stop the server. You can also just close the terminal window. 


## Contributing

Those who wish to contribute to this project can do so in multiple ways

### Issue Reporting
If you spot an issue while using/demoing the application, please create a new [GitHub Issue](https://github.com/IDEA-Lab-Clemson-University/cml-narrative/issues) describing the issue, where it was found, and what the expected behavior should be.

### Pull Requests
If you would like to contribute code to this repository, please create a fork and branch from the development branch and submit a pull request.

To keep contributions clear, it is recommended to install [psioniq File Header](https://marketplace.visualstudio.com/items?itemName=psioniq.psi-header) as an extension to VSCode. This will automatically add a comment to the top of any file you create with relevant information about the contributor. You should then go into `/.vscode/settings.json` and configure the `psi-header.config` object to represent your name, email and affiliation. 

## Project Structure

### Folder Structure
The main application lives in the `application` directory.

`demo` directory contains the preliminary project (and uses an old version of SvelteKit) hosing various demos and proof of concepts. It will be deleted soon.


### Branch Structure

This project will be split into different branches. This is a feature of `git` that will allow us to work on different features of this application without messing each other up.

The repository will consist of a `main` branch and a `development` branch. The `main` branch is reserved for final commits. Think of this branch being "production ready," (what the user will interact with). Everything here should be tested and working.

The `development` branch should be the branch you are developing in. However, if you decide to work on a new feature, it would be better to create a new branch from the `development` branch and then submit a pull request to merge your changes to the `development` branch which can then be merged to the `main` branch.

An example project stucture could look like:

```
.
`-- main/
    `-- development/
        |-- feature a/
        |   `-- quick fix to feature a
        `-- feature b
```

Pull requests can be made by visiting this projects repository on GitHub.

## Recommended Development Environment

I would recommend using [VSCode](https://code.visualstudio.com) to develop. This is a free application that is highly extensible.

Additional setup will be documented in another README
