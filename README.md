<div align="center">
<h1>
   iWeather
</h1>

<p>iWeather is a precise and intuitive weather forecast app to plan your day.</p>
</div>
<br/>

## Cloning the Repository

You can clone this repository using the following command:

```
https://github.com/rodrigojsdeveloper/iweather.git
```

## Package Manager

This project uses Yarn as its package manager. Make sure you have it installed before continuing.

## Installation of Dependencies

To install project dependencies, open the terminal at the root and run the following command:

```
npm install
```

## Starting iWeather

To start the project, run the following command in the terminal:

```
npm run dev
```

## Starting the Project in Docker

At the root of the project, run the following commands:

```
# Build the Docker image for the current folder and with `dockerized-iweather`

docker build . -t dockerized-iweather


# Check if the image was created
docker images | grep dockerized-iweather


# Run the image in detached mode and map port 3000 inside the container with 3000 on the current host

docker run -p 3000:3000 -d dockerized-iweather
```

The -d flag runs the project in the background, freeing up the terminal for other uses.

### Accessing iWeather on Vercel

You can access the iWeather application at the following link:

```
https://iweather-plus.vercel.app/
```

<br/>
<p align="center">Developed by <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a>
</p>
