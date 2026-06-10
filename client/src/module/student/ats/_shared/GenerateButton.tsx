
i
m
p
o
r
t
 
{
 
L
o
a
d
e
r
2
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
t
y
p
e
 
R
e
a
c
t
 
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


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
u
i
/
b
u
t
t
o
n
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
G
e
n
e
r
a
t
e
B
u
t
t
o
n
P
r
o
p
s
 
{


 
 
o
n
C
l
i
c
k
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
l
o
a
d
i
n
g
:
 
b
o
o
l
e
a
n
;


 
 
l
i
m
i
t
R
e
a
c
h
e
d
:
 
b
o
o
l
e
a
n
;


 
 
d
i
s
a
b
l
e
d
?
:
 
b
o
o
l
e
a
n
;


 
 
l
o
a
d
i
n
g
L
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
i
d
l
e
L
a
b
e
l
:
 
s
t
r
i
n
g
;


 
 
l
i
m
i
t
L
a
b
e
l
?
:
 
s
t
r
i
n
g
;


 
 
i
d
l
e
I
c
o
n
?
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
c
l
a
s
s
N
a
m
e
?
:
 
s
t
r
i
n
g
;


}




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
 
G
e
n
e
r
a
t
e
B
u
t
t
o
n
(
{


 
 
o
n
C
l
i
c
k
,


 
 
l
o
a
d
i
n
g
,


 
 
l
i
m
i
t
R
e
a
c
h
e
d
,


 
 
d
i
s
a
b
l
e
d
,


 
 
l
o
a
d
i
n
g
L
a
b
e
l
,


 
 
i
d
l
e
L
a
b
e
l
,


 
 
l
i
m
i
t
L
a
b
e
l
 
=
 
"
D
a
i
l
y
 
l
i
m
i
t
 
r
e
a
c
h
e
d
"
,


 
 
i
d
l
e
I
c
o
n
,


 
 
c
l
a
s
s
N
a
m
e
 
=
 
"
"
,


}
:
 
G
e
n
e
r
a
t
e
B
u
t
t
o
n
P
r
o
p
s
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
B
u
t
t
o
n


 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
i
c
k
}


 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
 
|
|
 
l
i
m
i
t
R
e
a
c
h
e
d
 
|
|
 
d
i
s
a
b
l
e
d
}


 
 
 
 
 
 
v
a
r
i
a
n
t
=
"
m
o
n
o
"


 
 
 
 
 
 
s
i
z
e
=
"
l
g
"


 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
{
`
w
-
f
u
l
l
 
h
-
1
2
 
r
o
u
n
d
e
d
-
x
l
 
t
e
x
t
-
s
m
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
a
c
t
i
v
e
:
s
c
a
l
e
-
[
0
.
9
9
]
 
$
{
c
l
a
s
s
N
a
m
e
}
`
}


 
 
 
 
>


 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
(


 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
<
L
o
a
d
e
r
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
 
a
n
i
m
a
t
e
-
s
p
i
n
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
L
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
)
 
:
 
l
i
m
i
t
R
e
a
c
h
e
d
 
?
 
(


 
 
 
 
 
 
 
 
l
i
m
i
t
L
a
b
e
l


 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
{
i
d
l
e
I
c
o
n
}


 
 
 
 
 
 
 
 
 
 
{
i
d
l
e
L
a
b
e
l
}


 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
B
u
t
t
o
n
>


 
 
)
;


}


