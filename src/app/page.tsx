import {prisma} from "@/prisma";

const Homepage = async () => {

    const users = await prisma.user.delete({where: {id: "test"}})

    console.log(users)

    return <div className=''>Homepage</div>
}

export default Homepage
