using System.Net.Http.Headers;
using Microsoft.Extensions.FileSystemGlobbing.Internal.PathSegments;

var builder = WebApplication.CreateBuilder(args);

List<Dog> dogs = new List<Dog>
{
    new Dog
    {
        Id = 1,
        Name = "Mia",
        CityId = 1,
        WalkerId = 1,
    },
    new Dog
    {
        Id = 2,
        Name = "Carl",
        CityId = 2,
        WalkerId = 1,
    },
};
List<Walker> walkers = new List<Walker>
{
    new Walker { Id = 1, Name = "M'Lee" },
};

List<City> cities = new List<City>
{
    new City { Id = 1, Name = "Nashville" },
    new City { Id = 2, Name = "Franklin" },
};

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet(
    "/api/hello",
    () =>
    {
        return new { Message = "Welcome to DeShawn's Dog Walking" };
    }
);

app.MapGet(
    "/api/dogs",
    () =>
    {
        var dogList = dogs.Select(d => new DogListDTO
        {
            Id = d.Id,
            Name = d.Name,
            WalkerId = d.WalkerId,
            CityId = d.CityId,
        });
        return dogList;
    }
);
app.MapGet(
    "/api/dogs/{id}",
    (int id) =>
    {
        var dogSelected = dogs.FirstOrDefault(d => d.Id == id);

        var city = cities.FirstOrDefault(c => c.Id == dogSelected.CityId);
        string cityName = city.Name;

        var walker = walkers.FirstOrDefault(w => w.Id == dogSelected.WalkerId);
        string walkerName = walker.Name;

        return Results.Ok(
            new DogDetailDTO
            {
                Id = dogSelected.Id,
                Name = dogSelected.Name,
                CityName = cityName,
                WalkerId = dogSelected.WalkerId,
                WalkerName = walkerName,
            }
        );
    }
);
app.MapGet(
    "/api/cities",
    () =>
    {
        var cityList = cities.Select(c => new CityListDTO { Id = c.Id, Name = c.Name });
        return cityList;
    }
);

app.MapGet(
    "/api/walkers",
    () =>
    {
        var walkerList = walkers.Select(w => new WalkerListDTO { Id = w.Id, Name = w.Name });
        return walkerList;
    }
);
app.MapDelete(
    "/api/dogs/{id}",
    (int id) =>
    {
        Dog deleteDog = dogs.FirstOrDefault(d => d.Id == id);
        dogs.Remove(deleteDog);

        return Results.NoContent();
    }
);
app.MapPost(
    "/api/dogs",
    (Dog newDog) =>
    {
        newDog.Id = dogs.Max(d => d.Id) + 1;
        dogs.Add(newDog);
        return Results.Created($"/api/dogs/{newDog.Id}", newDog);
    }
);

app.Run();
