const TestimonialCard = ({
	imageUrl,
	name,
	title,
	date,
	comment,
	barColor,
	linkedinUrl,
}) => {
	return (
		<div className={styles.commentBox} style={{ backgroundColor: barColor }}>
			<div className={styles.imageWrapper}>
				<img src={imageUrl} alt={name} className={styles.profileImage} />
			</div>
			<h3 className={styles.name}>
				{linkedinUrl ? (
					<a
						href={linkedinUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.linkedInLink}
					>
						{name}
					</a>
				) : (
					name
				)}
			</h3>
			<p className={styles.title}>{title}</p>
			<p className={styles.date}>{date}</p>
			<p className={styles.comment}>{comment}</p>
		</div>
	);
};

export default TestimonialCard;
