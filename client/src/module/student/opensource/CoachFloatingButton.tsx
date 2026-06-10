
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
r
a
i
n
C
i
r
c
u
i
t
 
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
 
{
 
u
s
e
C
o
a
c
h
S
t
o
r
e
 
}
 
f
r
o
m
 
"
.
/
s
t
o
r
e
s
/
c
o
a
c
h
.
s
t
o
r
e
"
;




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
C
o
a
c
h
F
l
o
a
t
i
n
g
B
u
t
t
o
n
(
)
 
{


 
 
c
o
n
s
t
 
{
 
t
o
g
g
l
e
,
 
i
s
O
p
e
n
 
}
 
=
 
u
s
e
C
o
a
c
h
S
t
o
r
e
(
)
;




 
 
i
f
 
(
i
s
O
p
e
n
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
 
d
e
l
a
y
:
 
0
.
5
,
 
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
 
3
0
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
t
o
g
g
l
e
}


 
 
 
 
 
 
t
i
t
l
e
=
"
O
p
e
n
 
C
o
n
t
r
i
b
u
t
i
o
n
 
C
o
a
c
h
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
3
0
 
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
 
g
a
p
-
2
 
h
-
1
0
 
p
x
-
3
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
5
0
 
t
e
x
t
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
s
h
a
d
o
w
-
l
g
 
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
7
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
g
-
s
t
o
n
e
-
2
0
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
 
b
o
r
d
e
r
-
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
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
b
o
l
d
"


 
 
 
 
>


 
 
 
 
 
 
<
B
r
a
i
n
C
i
r
c
u
i
t
 
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
 
s
h
r
i
n
k
-
0
"
 
/
>


 
 
 
 
 
 
<
s
p
a
n
>
C
o
a
c
h
<
/
s
p
a
n
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


