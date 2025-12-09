using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PhotosController : ControllerBase
{
    private readonly IPhotoService _photoService;
    private readonly ILogger<PhotosController> _logger;

    public PhotosController(IPhotoService photoService, ILogger<PhotosController> logger)
    {
        _photoService = photoService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<ActionResult<List<PhotoDto>>> GetPhotos([FromQuery] int year, [FromQuery] int month)
    {
        try
        {
            if (year < 2000 || year > 2100)
            {
                return BadRequest("Invalid year");
            }

            if (month < 1 || month > 12)
            {
                return BadRequest("Invalid month");
            }

            var photos = await _photoService.GetPhotosByYearAndMonthAsync(year, month);
            return Ok(photos);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error retrieving photos for {Year}-{Month}", year, month);
            return StatusCode(500, "An error occurred while retrieving photos");
        }
    }
}
