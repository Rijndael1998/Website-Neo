export const ps1 = [
    `
    Lagrange polynomials are an important tool in algebra and number theory, 
    commonly used in interpolation. Named after Joseph-Louis Lagrange, this 
    approach provides a means of constructing a polynomial that passes through 
    a specified set of points. The uniqueness of this polynomial is guaranteed 
    as long as it is of degree less than or equal to one less than the number 
    of points.
    `,
    `
    Now, moving to secret sharing, it is a method used in information security
    to split a secret, like a password, into multiple parts. These parts (or 
    'shares') are distributed among a group of participants. To reconstruct 
    the original secret, a certain number of shares (‘threshold’) are required. 
    If you don't have enough shares, you can't get the secret. 
    `,
    `
    Shamir's Secret Sharing is a popular secret sharing scheme which was introduced 
    by Adi Shamir, who is also a co-inventor of the RSA algorithm. Shamir's scheme 
    is said to be (t, n) threshold scheme because it distributes the secret into 
    'n' shares in such a way that 't' of them are needed to reconstruct the original 
    secret. 
    `,
    `
    This secret sharing scheme uses the concept of polynomial interpolation, 
    specifically Lagrange polynomial to reconstruct the original secret. 
    Here is how it works:
    `
]

export const points = [
    `Initially, A secret 's' is chosen. This is the secret you want to share.`,
    `A polynomial of degree 't-1' is generated randomly, with the condition that the constant term is 's'.`,
    `'n' different points from this polynomial are evaluated and these are the 'n' shares.`,
    `To recover 's', the Lagrange interpolation formula is applied to 't' distinct points.`,
];

export const ps2 = [
    `
    The security of Shamir's Secret Sharing scheme stems from the properties of polynomials. 
    It ensures that even if an attacker has 't-1' shares, they still can't figure out the 
    secret - they would need at least 't' shares. It's also important to note that any 't' 
    shares will work, not just a specific set.
    `,
    `
    These polynomials, and therefore Shamir’s Secret Sharing, can be used in a password manager 
    to distribute the master key safely among a group of select individuals. The master key 
    could be divided into parts and given to different individuals. When needed, the key can 
    be reconstructed by gathering a certain threshold of these parts. This ensures the security 
    of the password manager as the master key is not stored in one place, therefore significantly 
    decreasing the chance of the key getting exposed to potential threats.
    `
];

