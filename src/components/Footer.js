export const Footer = () => {
	return (
		<footer class="flex flex-row">
			<div class="posts flex flex-col">
				<div class="user-info-title gray">Posts</div>
				<div class="user-info-content">
					<img
						src="img/posts-icon.svg"
						alt="Posts icon"
						class="filter-gray"
						width="15"
						height="15"
					/>{' '}
					100.000
				</div>
			</div>
			<div class="followers flex flex-col">
				<div class="user-info-title gray">Followers</div>
				<div class="user-info-content">
					<img
						src="img/user-icon.svg"
						alt="Followers icon"
						class="filter-gray"
						width="15"
						height="15"
					/>{' '}
					8.000
				</div>
			</div>
			<div class="following flex flex-col">
				<div class="user-info-title gray">Following</div>
				<div class="user-info-content">
					<img
						src="img/user-icon.svg"
						alt="Following icon"
						class="filter-gray"
						width="15"
						height="15"
					/>{' '}
					10.000
				</div>
			</div>
		</footer>
	);
};
