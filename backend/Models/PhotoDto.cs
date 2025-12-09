namespace Backend.Models;

public class PhotoDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string PhotoSourceUrl { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime Time { get; set; }
}
