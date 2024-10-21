import { Hono } from 'hono';
import database from '../database';
import { and, eq, Name , sql} from 'drizzle-orm';
import { user , team, user_team } from '../database/schema';
import { env } from 'hono/adapter';
import { createTeamValidator } from '../validators';
import { use } from 'hono/jsx';

///done.


const app = new Hono<{ Bindings: Env }>();
app.get('/', (c) => c.json({ msg: 'server up and running' }));

// app.get('/fetch', getUserValidator, async (c) => {
// 	const db = database(c.env.DB);
// 	const  user  = c.req.valid('json');

// 	try {
// 		const user = await db.query.user.findMany({
// 			columns: {
// 				user_id: true,
// 				name: true,
// 				gmail: true,
// 			},
// 		});

// 		if (!user) return c.json({ msg: 'user not found' }, 404);

	

// 		return c.json({ ...user});
// 	} catch (error) {
// 		return c.json({ msg: "couldn't fetch user" }, 500);
// 	}
// });


app.post('/create',createTeamValidator, async (c) => {
	const db = database(c.env.DB);
	const data = c.req.valid('json');

	try {
		const [newTeam] = await db.insert(team).values(data).returning({ name: team.title, team_id: team.team_id });

  } catch (error) {
		return c.json({ msg: "couldn't create team1" }, 500);
  }
  try {


    const newUsers = await db.select({
      user_id : user.user_id,
    })
    .from(user)
    .where(sql`${user.name} IN (${sql.join(data.user_array)})`);
  
  
    } catch (error) {
      return c.json({ data, msg: "couldn't create team2"}, 500);
}

try{
  const userIds = newUsers.map(user => user.user_id);
  
  const userTeamInserts = userIds.map(userId => ({
    user_id: userId,
    team_id: newTeam.team_id,
  }));

} catch (error) {
  return c.json({ msg: "couldn't create team3" }, 500);
  }
  
  try {
    const feedUsers = await db.insert(user_team).values(userTeamInserts);


		return c.json({ ...newTeam , ...newUsers, msg: 'team created' });
	} catch (error) {
		return c.json({ msg: "couldn't create team4" }, 500);
	}




});

    

// app.patch('/update',updateUserValidator, async (c) => {
// 	const db = database(c.env.DB);
// 	const data = c.req.valid('json');

// 	try {

// 		const [reqUser_id] = await db.select({ user_id: user.user_id }).from(user).where(eq(user.gmail, data.user_gmail));

// 		if (!reqUser_id) {
// 			return c.json({ msg: "User not found" }, 404);  // Handle case where user is not found
// 		}
		
// 		const userData = {
// 						// user_id: reqUser_id.user_id,
// 						name: data.name,
// 						phone : data.phone || 0,
// 						address : data.address || null,
// 						password: data.password || null,
// 					}	

// 					const [updateUser] = await db
// 					.update(user)
// 					.set(userData)  // Set the fields to be updated
// 					.where(eq(user.user_id, reqUser_id.user_id))  // Ensure correct user is updated
// 					.returning({ user_id : user.user_id });  // Return the columns after update

// 		return c.json({ ...updateUser, msg: 'user updated' });
// 	} catch (error) {
// 		return c.json({ msg: "couldn't create user" }, 500);
// 	}
// });



export default app