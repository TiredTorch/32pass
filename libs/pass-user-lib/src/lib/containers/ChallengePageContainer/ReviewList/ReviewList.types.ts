export type ReviewListProps = {
	items: {
		user: {
			avatar: string,
			name: string
		},
		postDate: Date,
		rating: number,
		content: string
	}[];
};