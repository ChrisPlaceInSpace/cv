import '../CSS/NasaBackground.CSS'
export default function NasaBackground(){

    const [backgroundUrl, setBackgroundUrl] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const API_Key = "2mQfesh42vPShg3JoVfhHE1kBIq4koLzzS7jazYj";
    const API_Endpoint = "https://api.nasa.gov/planetary/apod";

    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                const response = await fetch(`${API_Endpoint}?api_key=${API_Key}`);
                if (!response.ok) throw new Error('Failed to fetch image');

                const dataResponse = await response.json();

                // const urls = dataResponse.map((item, index) => {
                // console.log(`Image ${index + 1}: ` ,item.hdurl);
                // return item.urls;
                // });

                setBackgroundUrl(dataResponse.hdurl);
                console.log(setBackgroundUrl);

            }
            catch(error) {
                console.error("Error fetching the background image:", error);

            }
            finally{
                setIsLoading(false);
            }
        };
        fetchBackgroundImage();
    }, []);

    return (
        <div
        className="home-container" 
            style={{ 
                backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none',
                
            }}>
                {isLoading ? (<Spinner/> ): (
                <h1>The corner of Chris</h1>
                )}
            </div>
        )
}