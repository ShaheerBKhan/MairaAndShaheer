using Microsoft.EntityFrameworkCore;
using MairaAndShaheer.Database.Models;

namespace MairaAndShaheer.Database.Data;

public class DatabaseContext : Microsoft.EntityFrameworkCore.DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
    }

    public DbSet<Photo> Photos { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Photo>(entity =>
        {
            entity.ToTable("Photos");

            entity.HasKey(e => e.Id);
            
            entity.Property(e => e.Id)
                .HasDefaultValueSql("gen_random_uuid()");

            entity.Property(e => e.Title)
                .IsRequired()
                .HasMaxLength(500);

            entity.Property(e => e.PhotoSourceUrl)
                .IsRequired()
                .HasMaxLength(1000);

            entity.Property(e => e.Description)
                .IsRequired();

            entity.Property(e => e.Time)
                .IsRequired();

            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .ValueGeneratedOnAdd();

            entity.Property(e => e.UpdatedAt)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .ValueGeneratedOnAddOrUpdate();

            // Create an index on Time for filtering by year/month
            entity.HasIndex(e => e.Time);
        });
    }
}
