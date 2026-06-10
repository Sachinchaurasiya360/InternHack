
i
m
p
o
r
t
 
{
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
u
s
e
D
e
b
o
u
n
c
e
<
T
>
(
v
a
l
u
e
:
 
T
,
 
d
e
l
a
y
:
 
n
u
m
b
e
r
)
:
 
T
 
{


 
 
c
o
n
s
t
 
[
d
e
b
o
u
n
c
e
d
V
a
l
u
e
,
 
s
e
t
D
e
b
o
u
n
c
e
d
V
a
l
u
e
]
 
=
 
u
s
e
S
t
a
t
e
<
T
>
(
v
a
l
u
e
)
;




 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
r
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
D
e
b
o
u
n
c
e
d
V
a
l
u
e
(
v
a
l
u
e
)
;


 
 
 
 
}
,
 
d
e
l
a
y
)
;




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
l
e
a
r
T
i
m
e
o
u
t
(
h
a
n
d
l
e
r
)
;


 
 
 
 
}
;


 
 
}
,
 
[
v
a
l
u
e
,
 
d
e
l
a
y
]
)
;




 
 
r
e
t
u
r
n
 
d
e
b
o
u
n
c
e
d
V
a
l
u
e
;


}
