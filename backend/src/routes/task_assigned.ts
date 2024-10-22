import { Hono } from 'hono';
import database from '../database';
import { and, eq, ne, sql } from 'drizzle-orm';
import {list , team, task, user , user_team, task_assigned} from '../database/schema';
import { env } from 'hono/adapter';
import {getTaskAssignedValidator} from '../validators';


///// done..


const app = new Hono<{ Bindings: Env }>();
app.get('/', (c) => c.json({ msg: 'server up and running' }));


  app.get('/fetch',getTaskAssignedValidator, async (c) => {
	const db = database(c.env.DB);
	const  data  = c.req.valid('json');

    try {
    
      
      const [reqTeam_id] = await db.select({ team_id: team.team_id }).from(team).where(eq(team.title, data.team_name));
      
			if (!reqTeam_id) {
        return c.json({ msg: "team not found" }, 404);  // Handle case where user is not found
      }
      
      const [reqTask_id] = await db.select({ task_id: task.task_id, assigner_id: task.assigner_id }).from(task).where(and
        (eq(task.title, data.task_name),
          (eq(task.team_id, reqTeam_id.team_id))));

      if (!reqTask_id) {
        return c.json({ msg: "task  not found" }, 404);  // Handle case where user is not found
      }
      

		const assign = await db.query.task_assigned.findMany({
      where:eq(task_assigned.task_id, reqTask_id.task_id),
      columns: {
        user_id: true,
      },
		});
			
			// const teamTask = await db
      // .select({
      //   task_id: task.task_id,
			// 	title: task.title,
			// 	descrption: task.descrption,
			// 	start_d: task.start_d,
			// 	end_d: task.end_d,
			// 	priority: task.priority,
			// 	status: task.status,
			// 	assigner_id : task.assigner_id,
      //   assigned_user_id: task_assigned.user_id // Assuming this is the field for user_id in task_assigned
      // })
      // .from(task)
      // .innerJoin(task_assigned, eq(task.task_id, task_assigned.task_id))
      // .where(eq(task.task_id, task_id));
			// // const taskRecieved = await db.select({ user_id: task_assigned.user_id }).from(task_assigned).where(eq(task_assigned.task_id, ));

		if (!assign) return c.json({ msg: 'assigners not found' }, 404);

	

		return c.json({ assign,reqTask_id });
	} catch (error) {
		return c.json({ msg: "couldn't fetch list" }, 500);
	}
});



export default app