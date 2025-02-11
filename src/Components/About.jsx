import { Accordion, AccordionItem } from "@nextui-org/accordion";
export default function About() {
    return (
        <>
            <section>
                <div className="bg-amber-100 p-2 space-y-5">
                    <div className="flex justify-center">
                        <h1 className="font-serif font-light text-4xl">What is Etsy India?</h1>
                    </div>
                    <div className="flex justify-center">
                        <p className="underline">Read our wonderfully weird story</p>
                    </div>
                    <div className="text-lg ml-44 mr-44">
                        <Accordion selectionMode="multiple" className='bg-amber-100'>
                            <AccordionItem key="1" aria-label="Accordion 1" title="Etsy is a global marketplace for creative and 
                                one-of-a-kind goods. It’s home to a universe of special,">
                                <p>extraordinary items, from unique home decor pieces to trending fashion finds. Founded in 2005, Etsy began its Indian journey in 2018.

                                    Etsy is a place where creativity lives and thrives because it’s powered by
                                    people just like you. We help our community of 5.9 million active sellers worldwide turn their ideas
                                    into successful small businesses. Our platform connects them with 89.9 million active buyers looking
                                    for something special that enables them to express their unique identity.</p>
                            </AccordionItem>
                            <AccordionItem key="2" aria-label="Accordion 2" title="Why choose Etsy?">
                                <p>A community doing good
                                    Etsy is where people come together to make, sell, buy, and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together:

                                    Your purchases on Etsy in 2021 generated nearly $4 billion in income for small businesses.

                                    We advocate for policy—at the global and local level—that benefits creative entrepreneurs and helps small businesses grow and thrive.

                                    We are deepening our commitment to a sustainable future and are working towards a new goal to reach net zero emissions by 2030.

                                    Support independent creators
                                    There’s no Etsy warehouse—just millions of people selling the things they love.
                                    We make the whole process easy, helping you connect directly with talented artisans from across the world (including India) to find something extraordinary.Peace of mind
                                    With Etsy Purchase Protection, you can shop confidently, knowing if something goes
                                    wrong with your order, we’ve got your back for all eligible purchases. If you ever need
                                    assistance, we are always ready to step in for support.</p>
                            </AccordionItem>
                            <AccordionItem key="3" aria-label="Accordion 3" title="What can you shop on Etsy?">
                                <p>The imagination of Etsy sellers can run far and wide,
                                    which makes our platform a home to more than 100 million active listings across home, style, and gifts. Some of our popular categories include:

                                    Home & Living: Whether you’re setting up a new apartment or making small upgrades for a home refresh, you’ll find everything you need to make your home a reflection of your personality on Etsy. From traditional elements like Jaipuri bedding, masala boxes, and Madhubani paintings to modern essentials like sleek table lamps, vibrant indoor planters, and decorative platters, Etsy sellers have much to offer.

                                    Clothing: Your unique fashion style deserves outfits that can match it. Discover tie-dye kaftans, linen shirts, hand-painted sarees, chikankari kurtis, ajrakh scarves and so much more—from small sellers who understand your aesthetic just as much as your comfort.

                                    Accessories: The gajra for your friend’s haldi ceremony or the gemstone ring that represents your zodiac—sometimes, the little things can make the biggest impact. Etsy has it all and more! Explore a range of beautiful fashion accessories and jewellery for all the occasions you have planned.

                                    Gifts: From birthdays and anniversaries to festivals and weddings, we’ve got all the
                                    special moments in life covered. You’ll easily find the perfect presents that not only match
                                    the unique personalities of your loved ones perfectly but also make them feel seen and
                                    cherished.</p>
                            </AccordionItem>
                            <AccordionItem key="4" aria-label="Accordion 3" title="How to buy on Etsy?">
                                <p>If you’re looking for something specific, start by
                                    putting in the keywords in our search and then using filters to narrow down the results. You can even message the sellers with any questions
                                    or requests you may have before placing an order with them.

                                    If you’re looking for inspiration, head on over to our Editor’s
                                    Picks or look out for the latest updates on our Journal to discover extraordinary items.</p>
                            </AccordionItem>
                            <AccordionItem key="5" aria-label="Accordion 3" title="How to sell on Etsy?">
                                <p>You can sell handmade goods, vintage items, and craft
                                    supplies on Etsy.
                                    With low fees, powerful tools, and support and education, we help creative entrepreneurs start, manage,
                                    and scale their businesses. Want to open a shop? All it takes is Rs. 16* to start selling on Etsy.

                                    *Listing fees are billed for 0.20 USD, so if your bank's currency is not USD,
                                    the amount in your currency may vary based on changes in the exchange rate.</p>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="flex justify-center">
                        <h3 className="font-medium text-xl">Have a question? Well, we’ve got some answers.</h3>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="border-2 border-black rounded-md text-xl font-normal">Go to Help Center</button>
                    </div>
                </div>
            </section>
        </>
    )
}