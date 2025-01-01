public class City
{
    public int Id { get; set; }
    public string Name { get; set; }

    //many to many reltationship storage
    public List<WalkerCity> walkerCities { get; set; } = new List<WalkerCity>();

    //cities within this walker
    public List<Walker> walkers => walkerCities.Select(wc => wc.Walker).ToList();
}
