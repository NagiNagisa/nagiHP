import xml2js from 'xml2js'
export default defineEventHandler(async (event) => {
    const res: string = await $fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCcjq9X1YAM9EO5kOkFpYZ-w")
    const parser = new xml2js.Parser({
        explicitArray:false
    });

    return await parser.parseStringPromise(res)
})