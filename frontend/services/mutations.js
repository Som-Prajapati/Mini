import axios from "axios";
import { useMutation } from "@tanstack/react-query";

//Create User
export function useCreateUserMutation() {
    return useMutation({
      mutationKey: ["createTask"],
      mutationFn: async (data) => {
        return (
          await axios.post("https://cotask.somprajapati24-dcf.workers.dev/myTask/create", data, {
            headers: { "Content-Type": "application/json" },
          })
        ).data;
      },
      retry: false,
    });
  }

//Create List
export function useCreateListMutation() {
  return useMutation({
    mutationKey: ["createList"],
    mutationFn: async ({ title,email }) => {
      // Log the request data
      console.log("Sending data:", JSON.stringify({ name: title })); // Changed title to name
      
      return (
        await axios.post(
          "https://cotask.somprajapati24-dcf.workers.dev/list/create",
          JSON.stringify({ name: title, user_gmail:email }), // Send as stringified JSON with 'name' key
          {
            headers: { 
              "Content-Type": "application/json",
            },
          }
        )
      ).data;
    },
    retry: false,
  });
}



//Create Task
// export function useCreateMyTaskMutation() {
//   return useMutation({
//     mutationKey: ["createMyTask"],
//     mutationFn: async ({ title, description, priority, end_d, taskStatus, userMail, listName }) => {
//       // Log the request data
//       // console.log("Sending data:", JSON.stringify({ name: title })); // Changed title to name
      
//       return (
//         await axios.post(
//           "https://cotask.somprajapati24-dcf.workers.dev/myTask/create",
//           JSON.stringify({ title, description,status:taskStatus, end_d, priority, user_gmail:userMail,list_name:listName }), // Send as stringified JSON with 'name' key
//           {
//             headers: { 
//               "Content-Type": "application/json",
//             },
//           }
//         )
//       ).data;
//     },
//     retry: false,
//   });
// }

export function useCreateMyTaskMutation() {
  return useMutation({
    mutationKey: ["createTask"],
    mutationFn: async ({ title, description, priority, end_d, taskStatus, userMail, listName }) => {
      console.log("Sending task data:", { title, description, priority, end_d, taskStatus, userMail, listName });
    //   console.log(typeof formattedEndD); // Outputs: 'object'
    // console.log(formattedEndD instanceof Date); // Outputs: true

      try {
        const response = await axios.post(
          "https://cotask.somprajapati24-dcf.workers.dev/myTask/create",
          JSON.stringify({
            title,
            description,
            status: taskStatus,
            end_d:end_d,
            priority,
            user_gmail: userMail,
            list_name: listName,
          }),
          {
            headers: { 
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("API call error:", error);
        throw error; // Allows onError to catch this error in the calling component
      }
    },
    retry: false, // Keeps retry disabled for specific control
  });
}


export function useDeleteMyTaskMutation() {
  return useMutation({
    mutationKey: ["deleteTask"],
    mutationFn: async ({ userMail, taskName }) => {
      console.log("Deleting task data:");
    //   console.log(typeof formattedEndD); // Outputs: 'object'
    // console.log(formattedEndD instanceof Date); // Outputs: true

    try {
    const response = await axios.delete(
      "https://cotask.somprajapati24-dcf.workers.dev/myTask/delete",
      {
        headers: { 
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          user_gmail: userMail,
          task_name: taskName
        }),
      }
    );
    return response.data;
  } catch (error) {
        console.error("API call error:", error);
        throw error; // Allows onError to catch this error in the calling component
      }
    },
    retry: false, // Keeps retry disabled for specific control
  });
}