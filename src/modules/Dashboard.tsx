import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Chip } from '@mui/material';
import styles from '../scss/base/card.module.scss';
import Navbar from './Navbar';
import Animal from '../assets/animal.jpg';
import Mechanic from '../assets/mechanic.jpg';
function Dashboard() {
	return (
		<div>
			<div>
				<Navbar />
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Card className={styles.wrapper}>
								<CardHeader
									avatar={
										<Avatar className={styles.avatar} aria-label="recipe">
											R
										</Avatar>
									}
									title="John Doe"
									subheader="September 14, 2022"
								/>
								<CardMedia
									component="img"
									height="194"
									image={Animal}
									alt="Paella dish"
								/>
								<CardContent>
									<Typography variant="body2" className={styles.content}>
										This impressive paella is a perfect party dish and a fun
										meal to cook together with your guests. Add 1 cup of frozen
										peas along with the mussels, if you like.
									</Typography>
									<Chip
										label="Animal"
										component="a"
										href="#basic-chip"
										clickable
										className={styles.chip}
									/>
									<Chip
										label="Nature"
										component="a"
										href="#basic-chip"
										variant="outlined"
										clickable
										className={styles.chip}
									/>
									<Chip
										label="Science"
										component="a"
										href="#basic-chip"
										clickable
										className={styles.chip}
									/>
								</CardContent>
								<CardActions>
									<Button size="small" className={styles.button}>
										Read More
									</Button>
								</CardActions>
							</Card>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Card className={styles.wrapper}>
								<CardHeader
									avatar={
										<Avatar className={styles.avatar} aria-label="recipe">
											J
										</Avatar>
									}
									title="Jane Doe"
									subheader="September 14, 2016"
								/>
								<CardMedia
									component="img"
									height="194"
									image={Mechanic}
									alt="Paella dish"
								/>
								<CardContent>
									<Typography variant="body2" className={styles.content}>
										This impressive paella is a perfect party dish and a fun
										meal to cook together with your guests. Add 1 cup of frozen
										peas along with the mussels, if you like.
									</Typography>

									<Chip
										label="Education"
										component="a"
										href="#basic-chip"
										clickable
										className={styles.chip}
									/>
									<Chip
										label="Technology"
										component="a"
										href="#basic-chip"
										variant="outlined"
										clickable
										className={styles.chip}
									/>
									<Chip
										label="Engineering"
										component="a"
										href="#basic-chip"
										clickable
										className={styles.chip}
									/>
								</CardContent>
								<CardActions>
									<Button size="small" className={styles.button}>
										Read More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</div>
		</div>
	);
}
export default Dashboard;
