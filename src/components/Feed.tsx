import React from 'react'
import { prisma } from '@/prisma'
import Post from '@/components/Post'
import { auth } from '@clerk/nextjs/server'

const Feed = async ({ userProfiledId }: { userProfiledId: string }) => {
  const { userId } = await auth()

  if (!userId) return

  const whereCondition = userProfiledId
    ? { parentPostId: null, userId: userProfiledId }
    : {
        parentPostId: null,
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map((follow) => follow.followingId),
          ],
        },
      }

  const posts = await prisma.post.findMany({ where: whereCondition })

  console.log(posts)

  // FETCH POSTS FROM THE CURRENT USER AND THE FOLLOWINGS
  return (
    <div className=''>
      {posts.map((post) => (
        <div key={post.id}>
          <Post />
        </div>
      ))}
    </div>
  )
}

export default Feed
