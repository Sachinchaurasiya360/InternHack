
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
N
a
v
i
g
a
t
e
,
 
u
s
e
L
o
c
a
t
i
o
n
 
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
-
r
o
u
t
e
r
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
o
t
M
e
s
s
a
g
e
S
q
u
a
r
e
 
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
 
J
o
b
A
g
e
n
t
C
h
a
t
B
u
b
b
l
e
(
)
 
{


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;


 
 
c
o
n
s
t
 
l
o
c
a
t
i
o
n
 
=
 
u
s
e
L
o
c
a
t
i
o
n
(
)
;




 
 
i
f
 
(
l
o
c
a
t
i
o
n
.
p
a
t
h
n
a
m
e
 
=
=
=
 
"
/
s
t
u
d
e
n
t
/
a
i
-
a
g
e
n
t
"
)
 
r
e
t
u
r
n
 
n
u
l
l
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
s
c
a
l
e
:
 
0
,
 
o
p
a
c
i
t
y
:
 
0
 
}
}


 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
s
c
a
l
e
:
 
1
,
 
o
p
a
c
i
t
y
:
 
1
 
}
}


 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
=
{
{
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
2
6
0
,
 
d
a
m
p
i
n
g
:
 
2
0
,
 
d
e
l
a
y
:
 
0
.
5
 
}
}


 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
s
c
a
l
e
:
 
1
.
0
8
 
}
}


 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
5
 
}
}


 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
n
a
v
i
g
a
t
e
(
"
/
s
t
u
d
e
n
t
/
a
i
-
a
g
e
n
t
"
)
}


 
 
 
 
 
 
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
f
i
x
e
d
 
b
o
t
t
o
m
-
6
 
r
i
g
h
t
-
6
 
z
-
5
0
 
w
-
1
4
 
h
-
1
4
 
r
o
u
n
d
e
d
-
2
x
l
 
b
g
-
i
n
d
i
g
o
-
6
0
0
 
h
o
v
e
r
:
b
g
-
i
n
d
i
g
o
-
7
0
0
 
t
e
x
t
-
w
h
i
t
e
 
s
h
a
d
o
w
-
l
g
 
s
h
a
d
o
w
-
i
n
d
i
g
o
-
6
0
0
/
2
5
 
h
o
v
e
r
:
s
h
a
d
o
w
-
x
l
 
h
o
v
e
r
:
s
h
a
d
o
w
-
i
n
d
i
g
o
-
6
0
0
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
a
l
l
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
"


 
 
 
 
 
 
t
i
t
l
e
=
"
I
n
t
e
r
n
H
a
c
k
 
A
I
"


 
 
 
 
>


 
 
 
 
 
 
<
B
o
t
M
e
s
s
a
g
e
S
q
u
a
r
e
 
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
6
 
h
-
6
"
 
/
>


 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
>


 
 
)
;


}


