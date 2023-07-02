import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus} from 'react-icons/ai'
const apiKey = "87fe8d14fcdb6ed3374406d86d514066";


const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const popular = "popular";
const rated = "top_rated";
const favorite = "now_playing";
const imgUrl = "https://image.tmdb.org/t/p/original";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
	<div className="row">
		<h2>{title}</h2>
		<div>
			{arr.map((item, index) => (
				<Card key={index} img={`${imgUrl}/${item.poster_path}`} />
			))}
		</div>
	</div>
);

const Home = () => {
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [ratedMovies, setRatedMovies] = useState([]);
	const [favoriteMovies, setFavoriteMovies] = useState([]);
	const [genre, setGenre] = useState([]);

	useEffect(() => {
		const fetchUpcoming = async () => {
			const {
				data: { results },
			} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=5`);
			setUpcomingMovies(results);
		};

		const fetchPopular = async () => {
			const {
				data: { results },
			} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
			setPopularMovies(results);
		};
		const fetchRated = async () => {
			const {
				data: { results },
			} = await axios.get(`${url}/movie/${rated}?api_key=${apiKey}`);
			setRatedMovies(results);
		};

		const fetchFavorite = async () => {
			const {
				data: { results },
			} = await axios.get(`${url}/movie/${favorite}?api_key=${apiKey}`);
			setFavoriteMovies(results);
		};

		const fetchGenere = async () => {
			const {
				data: { genres },
			} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
			setGenre(genres);
			console.log(genres);
		};

		fetchGenere();
		fetchUpcoming();
		fetchRated();
		fetchFavorite();
		fetchPopular();
	}, []);
    
    // console.log(' the original title is ', popularMovies[0].original_title);
    return (
			<section className="home">
				<div
					className="banner"
					style={{
						backgroundImage: popularMovies[2]
							? `url(${imgUrl}/${popularMovies[2].poster_path}`
							: "black",
					}}
				>
					{popularMovies[2] && <h1>{popularMovies[2].original_title}</h1>}
					{popularMovies[2] && <p>{popularMovies[2].overview}</p>}
					<div>
						<button>
							Play <BiPlay />{" "}
						</button>
						<button>
							My List <AiOutlinePlus />{" "}
						</button>
					</div>
				</div>

				<Row title={"Upcoming Movies"} arr={upcomingMovies} />
				<Row title={"Popular on Netflix"} arr={popularMovies} />
				<Row title={"Top Rated"} arr={ratedMovies} />
				<Row title={"Picks for Param"} arr={favoriteMovies} />

				<div className="genreBox">
					{genre.map((item) => (
						<Link key={item.id} to={`/genre/${item.id}`}>
							{item.name}
						</Link>
					))}
				</div>
			</section>
		);
};

export default Home;
