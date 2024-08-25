export const Body = () => {
	return (
		<main class="flex-1">
			<article class="flex flex-col">
				<div class="user-info flex-start flex-col">
					<div class="user-name">Batman</div>
					<div class="user-location">
						<img
							src="img/location-icon.svg"
							alt="Location icon"
							class="filter-location"
							width="15"
							height="15"
						/>
						<span>Gotham City</span>
					</div>
					<div class="user-description gray">
						<span>
							Bruce Wayne, el enigmático multimillonario de Ciudad Gótica, es un
							símbolo de poder y misterio. Detrás de su fachada de hombre de
							negocios se oculta un vigilante dedicado a combatir el crimen como
							Batman.
						</span>
					</div>
				</div>
				<div class="user-social flex flex-row">
					<a
						href="https://www.github.com/mangelgl"
						target="_blank"
						rel="noreferrer">
						<button>Follow</button>
					</a>
				</div>
			</article>
		</main>
	);
};
