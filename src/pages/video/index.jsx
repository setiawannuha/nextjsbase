import React from 'react'
import Link from "next/link"
import {getAll} from "@/services/video.service"

export const getServerSideProps = (async(context) => {
  const [error, result] = await getAll()
  return {props: {data: {result, error}}}
})

const Video = ({data}) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Video</h1>
      <Link href="/video/create">Create Video</Link>
      <div>
        {
          data.error?(
            <div>Error</div>
          ):(
            data?.result.map((e, i) => (
              <div key={i}>
                {e.title}
              </div>
            ))
          )
        }
      </div>
    </div>
  )
}

export default Video