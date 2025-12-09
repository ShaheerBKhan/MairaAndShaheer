using Backend.Models;
using MairaAndShaheer.Database.Data;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;

public interface IPhotoService
{
    Task<List<PhotoDto>> GetPhotosByYearAndMonthAsync(int year, int month);
}

public class PhotoService : IPhotoService
{
    private readonly DatabaseContext _context;

    public PhotoService(DatabaseContext context)
    {
        _context = context;
    }

    public async Task<List<PhotoDto>> GetPhotosByYearAndMonthAsync(int year, int month)
    {
        var photos = await _context.Photos
            .Where(p => p.Time.Year == year && p.Time.Month == month)
            .OrderBy(p => p.Time)
            .Select(p => new PhotoDto
            {
                Id = p.Id,
                Title = p.Title,
                PhotoSourceUrl = p.PhotoSourceUrl,
                Description = p.Description ?? string.Empty,
                Time = p.Time
            })
            .ToListAsync();

        return photos;
    }
}
