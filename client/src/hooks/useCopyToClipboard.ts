
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
C
o
p
y
T
o
C
l
i
p
b
o
a
r
d
(
r
e
s
e
t
D
e
l
a
y
 
=
 
2
0
0
0
)
 
{


 
 
c
o
n
s
t
 
[
c
o
p
i
e
d
,
 
s
e
t
C
o
p
i
e
d
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
(
f
a
l
s
e
)
;




 
 
c
o
n
s
t
 
c
o
p
y
 
=
 
a
s
y
n
c
 
(
t
e
x
t
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
(
t
e
x
t
)
;


 
 
 
 
 
 
s
e
t
C
o
p
i
e
d
(
t
r
u
e
)
;


 
 
 
 
 
 
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
 
s
e
t
C
o
p
i
e
d
(
f
a
l
s
e
)
,
 
r
e
s
e
t
D
e
l
a
y
)
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
)
 
{


 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
c
o
p
y
:
"
,
 
e
r
r
)
;


 
 
 
 
}


 
 
}
;




 
 
r
e
t
u
r
n
 
{
 
c
o
p
i
e
d
,
 
c
o
p
y
 
}
;


}


