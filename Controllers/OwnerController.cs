using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AccountOwnerClient.Data;
using AccountOwnerClient.Models;

namespace AccountOwnerClient.Controllers
{
    [Route("api/owner")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly OwnerContext _context;

        public OwnerController(OwnerContext context)
        {
            _context = context;
        }

        // GET: api/owner
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Owner>>> GetOwner()
        {
            return await _context.Owner.ToListAsync();
        }

        // GET: api/owner/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Owner>> GetOwner(Guid id)
        {
            var owner = await _context.Owner.FindAsync(id);

            if (owner == null)
            {
                return NotFound();
            }

            return owner;
        }

        // PUT: api/owner/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOwner(Guid id, Owner owner)
        {
            if (id != owner.Id)
            {
                return BadRequest();
            }

            _context.Entry(owner).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OwnerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/owner
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Owner>> PostOwner(Owner owner)
        {
            _context.Owner.Add(owner);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOwner", new { id = owner.Id }, owner);
        }

        // DELETE: api/owner/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Owner>> DeleteOwner(Guid id)
        {
            var owner = await _context.Owner.FindAsync(id);
            if (owner == null)
            {
                return NotFound();
            }

            _context.Owner.Remove(owner);
            await _context.SaveChangesAsync();

            return owner;
        }

        private bool OwnerExists(Guid id)
        {
            return _context.Owner.Any(e => e.Id == id);
        }
    }
}
