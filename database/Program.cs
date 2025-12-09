using MairaAndShaheer.Database.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .Build();

var connectionString = configuration.GetConnectionString("DefaultConnection");

var optionsBuilder = new DbContextOptionsBuilder<DatabaseContext>();
optionsBuilder.UseNpgsql(connectionString);

using var context = new DatabaseContext(optionsBuilder.Options);

// Seed the database
SeedData.Seed(context);

Console.WriteLine("Database seeding completed!");
