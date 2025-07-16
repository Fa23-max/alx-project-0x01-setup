import React from 'react'

const Users = () => {
  return (
    <div>Users</div>
  )
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}
export default Users;
//  ["posts.map", "<UserCard"]