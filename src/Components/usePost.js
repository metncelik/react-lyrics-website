const usePost = (url, blog) => {
            fetch(url,
                {
                    method:"POST",
                    headers:{"Content-Type": "application/json",},
                    body: JSON.stringify(blog),
                })
        
}
 
export default usePost;