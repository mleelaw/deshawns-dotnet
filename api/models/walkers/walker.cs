public class Walker
{
    public int Id { get; set; }
    public string Name { get; set; }

    //many to many reltationship storage
    public List<WalkerCity> walkerCities { get; set; } = new List<WalkerCity>();

    //cities within this walker
    public List<City> cities => walkerCities.Select(wc => wc.City).ToList();
}
