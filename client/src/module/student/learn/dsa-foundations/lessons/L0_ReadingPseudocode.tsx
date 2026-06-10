
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
M
e
m
o
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


i
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
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


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


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
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


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
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
C
o
d
e
B
l
o
c
k
,


 
 
I
n
l
i
n
e
C
o
d
e
,


 
 
L
e
d
e
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


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
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
n
o
t
a
t
i
o
n
R
o
w
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
s
y
m
b
o
l
:
 
"
←
"
,


 
 
 
 
 
 
m
e
a
n
i
n
g
:
 
"
A
s
s
i
g
n
m
e
n
t
 
(
s
t
o
r
e
 
a
 
v
a
l
u
e
)
"
,


 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
t
o
t
a
l
 
←
 
0
"
,


 
 
 
 
 
 
p
l
a
i
n
:
 
'
S
e
t
 
t
o
t
a
l
 
t
o
 
0
.
 
L
i
k
e
 
"
=
"
 
i
n
 
m
o
s
t
 
l
a
n
g
u
a
g
e
s
.
'
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
y
m
b
o
l
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
"
,


 
 
 
 
 
 
m
e
a
n
i
n
g
:
 
"
L
o
o
p
:
 
i
 
g
o
e
s
 
f
r
o
m
 
0
 
u
p
 
t
o
 
n
-
1
"
,


 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
f
o
r
 
i
 
i
n
 
0
.
.
3
"
,


 
 
 
 
 
 
p
l
a
i
n
:
 
"
R
u
n
s
 
t
h
e
 
b
o
d
y
 
w
i
t
h
 
i
 
=
 
0
,
 
1
,
 
2
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
y
m
b
o
l
:
 
"
w
h
i
l
e
 
c
o
n
d
"
,


 
 
 
 
 
 
m
e
a
n
i
n
g
:
 
"
L
o
o
p
 
w
h
i
l
e
 
a
 
c
o
n
d
i
t
i
o
n
 
i
s
 
t
r
u
e
"
,


 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
w
h
i
l
e
 
x
 
<
 
1
0
"
,


 
 
 
 
 
 
p
l
a
i
n
:
 
"
K
e
e
p
 
r
u
n
n
i
n
g
 
t
h
e
 
b
o
d
y
 
u
n
t
i
l
 
x
 
i
s
 
n
o
 
l
o
n
g
e
r
 
l
e
s
s
 
t
h
a
n
 
1
0
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
y
m
b
o
l
:
 
"
i
f
 
/
 
e
l
i
f
 
/
 
e
l
s
e
"
,


 
 
 
 
 
 
m
e
a
n
i
n
g
:
 
"
B
r
a
n
c
h
i
n
g
,
 
c
h
o
o
s
e
 
o
n
e
 
p
a
t
h
"
,


 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
i
f
 
a
 
>
 
b
:
 
.
.
.
"
,


 
 
 
 
 
 
p
l
a
i
n
:
 
"
R
u
n
 
t
h
e
 
i
n
d
e
n
t
e
d
 
b
l
o
c
k
 
o
n
l
y
 
w
h
e
n
 
t
h
e
 
c
o
n
d
i
t
i
o
n
 
i
s
 
t
r
u
e
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
y
m
b
o
l
:
 
"
r
e
t
u
r
n
 
x
"
,


 
 
 
 
 
 
m
e
a
n
i
n
g
:
 
"
O
u
t
p
u
t
,
 
h
a
n
d
 
a
 
v
a
l
u
e
 
b
a
c
k
"
,


 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
r
e
t
u
r
n
 
t
o
t
a
l
"
,


 
 
 
 
 
 
p
l
a
i
n
:
 
"
T
h
e
 
a
l
g
o
r
i
t
h
m
 
i
s
 
d
o
n
e
;
 
t
h
e
 
a
n
s
w
e
r
 
i
s
 
t
h
e
 
v
a
l
u
e
 
o
f
 
t
o
t
a
l
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
y
m
b
o
l
:
 
"
/
/
 
c
o
m
m
e
n
t
"
,


 
 
 
 
 
 
m
e
a
n
i
n
g
:
 
"
A
 
h
u
m
a
n
 
n
o
t
e
,
 
i
g
n
o
r
e
d
 
b
y
 
t
h
e
 
c
o
m
p
u
t
e
r
"
,


 
 
 
 
 
 
e
x
a
m
p
l
e
:
 
"
/
/
 
a
d
d
 
e
a
c
h
 
i
t
e
m
"
,


 
 
 
 
 
 
p
l
a
i
n
:
 
"
N
o
t
 
a
 
s
t
e
p
,
 
j
u
s
t
 
a
n
 
e
x
p
l
a
n
a
t
i
o
n
 
f
o
r
 
t
h
e
 
r
e
a
d
e
r
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
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
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
r
e
a
d
i
n
g
 
p
s
e
u
d
o
c
o
d
e
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
H
a
l
f
-
c
o
d
e
,
 
h
a
l
f
-
E
n
g
l
i
s
h
,
 
n
o
 
c
o
m
p
i
l
e
r
 
n
e
e
d
e
d
.
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
H
a
v
e
 
y
o
u
 
e
v
e
r
 
t
r
i
e
d
 
t
o
 
e
x
p
l
a
i
n
 
a
 
r
e
c
i
p
e
 
b
u
t
 
k
e
p
t
 
s
t
o
p
p
i
n
g
 
t
o
 
s
a
y
 
"
w
e
l
l
,


 
 
 
 
 
 
 
 
 
 
i
n
 
m
y
 
o
v
e
n
 
i
t
 
w
o
u
l
d
 
b
e
 
g
a
s
 
m
a
r
k
 
4
,
 
b
u
t
 
o
n
 
a
n
 
e
l
e
c
t
r
i
c
 
y
o
u
 
w
o
u
l
d
 
u
s
e


 
 
 
 
 
 
 
 
 
 
1
8
0
°
C
.
.
.
"
?
 
P
s
e
u
d
o
c
o
d
e
 
s
o
l
v
e
s
 
t
h
a
t
 
p
r
o
b
l
e
m
 
f
o
r
 
a
l
g
o
r
i
t
h
m
s
.
 
I
t
 
d
e
s
c
r
i
b
e
s


 
 
 
 
 
 
 
 
 
 
t
h
e
 
l
o
g
i
c
 
i
n
 
p
l
a
i
n
,
 
r
e
a
d
a
b
l
e
 
s
t
e
p
s
 
w
i
t
h
o
u
t
 
l
o
c
k
i
n
g
 
y
o
u
 
i
n
t
o
 
a
n
y


 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
a
m
m
i
n
g
 
l
a
n
g
u
a
g
e
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
C
a
r
d
 
p
a
d
d
e
d
=
{
f
a
l
s
e
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
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
"
>


 
 
 
 
 
 
 
 
<
d
i
v
 
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
p
x
-
4
 
p
y
-
3
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
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
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
a
t
i
o
n
 
c
h
e
a
t
s
h
e
e
t


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
t
a
b
l
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
f
u
l
l
 
t
e
x
t
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
t
h
e
a
d
 
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
9
5
0
/
5
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
"
S
y
m
b
o
l
 
/
 
k
e
y
w
o
r
d
"
,
 
"
W
h
a
t
 
i
t
 
m
e
a
n
s
"
,
 
"
P
l
a
i
n
 
E
n
g
l
i
s
h
"
]
.
m
a
p
(
(
h
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
h


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
h
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
t
e
x
t
-
l
e
f
t
 
p
x
-
4
 
p
y
-
3
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
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
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
h
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
h
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
<
/
t
h
e
a
d
>


 
 
 
 
 
 
 
 
 
 
<
t
b
o
d
y
>


 
 
 
 
 
 
 
 
 
 
 
 
{
n
o
t
a
t
i
o
n
R
o
w
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
r
.
s
y
m
b
o
l
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
{
i
 
=
=
=
 
0
 
?
 
"
"
 
:
 
"
b
o
r
d
e
r
-
t
 
b
o
r
d
e
r
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
5
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
4
 
p
y
-
2
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
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
t
e
x
t
-
l
i
m
e
-
4
0
0
 
w
h
i
t
e
s
p
a
c
e
-
n
o
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
s
y
m
b
o
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
4
 
p
y
-
2
 
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
7
0
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
3
0
0
 
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
m
e
a
n
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
o
n
t
-
m
o
n
o
 
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
4
0
0
 
m
t
-
0
.
5
 
t
e
x
t
-
[
1
1
p
x
]
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
.
g
.
 
<
I
n
l
i
n
e
C
o
d
e
>
{
r
.
e
x
a
m
p
l
e
}
<
/
I
n
l
i
n
e
C
o
d
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
d
 
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
p
x
-
4
 
p
y
-
2
 
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
0
 
t
e
x
t
-
x
s
"
>
{
r
.
p
l
a
i
n
}
<
/
t
d
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
r
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
t
b
o
d
y
>


 
 
 
 
 
 
 
 
<
/
t
a
b
l
e
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
I
n
d
e
n
t
a
t
i
o
n
 
=
 
s
c
o
p
e
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
I
n
 
p
s
e
u
d
o
c
o
d
e
 
t
h
e
r
e
 
a
r
e
 
n
o
 
c
u
r
l
y
 
b
r
a
c
e
s
.
 
I
n
s
t
e
a
d
,
 
i
n
d
e
n
t
a
t
i
o
n
 
(
m
o
v
i
n
g


 
 
 
 
 
 
 
 
 
 
l
i
n
e
s
 
t
o
 
t
h
e
 
r
i
g
h
t
)
 
s
h
o
w
s
 
w
h
i
c
h
 
s
t
e
p
s
 
b
e
l
o
n
g
 
t
o
 
a
 
l
o
o
p
 
o
r
 
a
n
 
i
f
-
b
l
o
c
k
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
>


{
`
f
o
r
 
i
 
i
n
 
0
.
.
n
:


 
 
t
o
t
a
l
 
←
 
t
o
t
a
l
 
+
 
a
[
i
]
 
 
 
/
/
 
i
n
d
e
n
t
e
d
 
→
 
r
u
n
s
 
e
a
c
h
 
l
o
o
p


r
e
t
u
r
n
 
t
o
t
a
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
/
 
n
o
t
 
i
n
d
e
n
t
e
d
 
→
 
r
u
n
s
 
o
n
c
e
`
}


 
 
 
 
 
 
 
 
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
t
-
3
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
<
I
n
l
i
n
e
C
o
d
e
>
r
e
t
u
r
n
 
t
o
t
a
l
<
/
I
n
l
i
n
e
C
o
d
e
>
 
l
i
n
e
 
i
s
 
a
t
 
t
h
e
 
s
a
m
e
 
l
e
v
e
l
 
a
s


 
 
 
 
 
 
 
 
 
 
t
h
e
 
<
I
n
l
i
n
e
C
o
d
e
>
f
o
r
<
/
I
n
l
i
n
e
C
o
d
e
>
 
k
e
y
w
o
r
d
,
 
s
o
 
i
t
 
h
a
p
p
e
n
s
 
a
f
t
e
r
 
t
h
e
 
l
o
o
p


 
 
 
 
 
 
 
 
 
 
f
i
n
i
s
h
e
s
,
 
n
o
t
 
i
n
s
i
d
e
 
i
t
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
H
o
w
 
t
o
 
r
e
a
d
 
a
n
y
 
p
s
e
u
d
o
c
o
d
e
:
<
/
s
t
r
o
n
g
>
 
t
r
a
c
e
 
i
t
 
l
i
n
e
 
b
y
 
l
i
n
e
 
a
n
d


 
 
 
 
 
 
 
 
w
r
i
t
e
 
d
o
w
n
 
w
h
a
t
 
e
a
c
h
 
v
a
r
i
a
b
l
e
 
h
o
l
d
s
 
a
f
t
e
r
 
t
h
a
t
 
l
i
n
e
.
 
T
h
a
t
 
i
s
 
a
l
l
 
t
h
e
r
e


 
 
 
 
 
 
 
 
i
s
 
t
o
 
i
t
.
 
Y
o
u
 
w
i
l
l
 
p
r
a
c
t
i
c
e
 
t
h
i
s
 
i
n
 
t
h
e
 
V
i
s
u
a
l
i
z
e
 
a
n
d
 
T
r
y
 
I
t
 
t
a
b
s
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
,
 
s
u
m
 
a
n
 
a
r
r
a
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
S
u
m
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
a
c
t
i
v
e
I
n
d
e
x
:
 
n
u
m
b
e
r
;


}




c
o
n
s
t
 
S
U
M
_
A
R
R
A
Y
 
=
 
[
4
,
 
2
,
 
7
]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
L
I
N
E
S
 
=
 
[


 
 
"
t
o
t
a
l
 
←
 
0
"
,


 
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
:
"
,


 
 
"
 
 
t
o
t
a
l
 
←
 
t
o
t
a
l
 
+
 
a
[
i
]
"
,


 
 
"
r
e
t
u
r
n
 
t
o
t
a
l
"
,


]
;




f
u
n
c
t
i
o
n
 
b
u
i
l
d
S
u
m
F
r
a
m
e
s
(
)
:
 
S
u
m
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
f
:
 
S
u
m
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
t
o
t
a
l
:
 
"
,
"
,
 
i
:
 
"
,
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
"
W
e
 
s
t
a
r
t
 
b
y
 
s
e
t
t
i
n
g
 
t
o
t
a
l
 
t
o
 
0
.
 
T
h
i
s
 
i
s
 
o
u
r
 
r
u
n
n
i
n
g
 
s
u
m
,
 
b
e
g
i
n
n
i
n
g
 
f
r
o
m
 
n
o
t
h
i
n
g
.
"
,


 
 
 
 
a
c
t
i
v
e
I
n
d
e
x
:
 
-
1
,


 
 
}
)
;


 
 
f
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
0
,


 
 
 
 
v
a
r
s
:
 
{
 
t
o
t
a
l
:
 
0
,
 
i
:
 
"
,
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
"
t
o
t
a
l
 
i
s
 
n
o
w
 
0
.
 
T
h
i
n
k
 
o
f
 
i
t
 
a
s
 
a
n
 
e
m
p
t
y
 
b
u
c
k
e
t
 
w
e
 
w
i
l
l
 
f
i
l
l
 
w
i
t
h
 
v
a
l
u
e
s
.
"
,


 
 
 
 
a
c
t
i
v
e
I
n
d
e
x
:
 
-
1
,


 
 
}
)
;


 
 
l
e
t
 
t
o
t
a
l
 
=
 
0
;


 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
S
U
M
_
A
R
R
A
Y
.
l
e
n
g
t
h
;
 
i
+
+
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
1
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
t
o
t
a
l
,
 
i
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
L
o
o
p
 
s
t
a
r
t
s
.
 
i
 
=
 
$
{
i
}
.
 
W
e
 
w
i
l
l
 
l
o
o
k
 
a
t
 
a
[
$
{
i
}
]
 
=
 
$
{
S
U
M
_
A
R
R
A
Y
[
i
]
}
.
`
,


 
 
 
 
 
 
a
c
t
i
v
e
I
n
d
e
x
:
 
i
,


 
 
 
 
}
)
;


 
 
 
 
t
o
t
a
l
 
+
=
 
S
U
M
_
A
R
R
A
Y
[
i
]
;


 
 
 
 
f
.
p
u
s
h
(
{


 
 
 
 
 
 
l
i
n
e
:
 
2
,


 
 
 
 
 
 
v
a
r
s
:
 
{
 
t
o
t
a
l
,
 
i
 
}
,


 
 
 
 
 
 
m
e
s
s
a
g
e
:
 
`
t
o
t
a
l
 
←
 
$
{
t
o
t
a
l
 
-
 
S
U
M
_
A
R
R
A
Y
[
i
]
}
 
+
 
$
{
S
U
M
_
A
R
R
A
Y
[
i
]
}
 
=
 
$
{
t
o
t
a
l
}
.
 
A
d
d
 
a
[
$
{
i
}
]
 
t
o
 
t
h
e
 
r
u
n
n
i
n
g
 
s
u
m
.
`
,


 
 
 
 
 
 
a
c
t
i
v
e
I
n
d
e
x
:
 
i
,


 
 
 
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{


 
 
 
 
l
i
n
e
:
 
3
,


 
 
 
 
v
a
r
s
:
 
{
 
t
o
t
a
l
,
 
i
:
 
"
d
o
n
e
"
 
}
,


 
 
 
 
m
e
s
s
a
g
e
:
 
`
A
l
l
 
i
t
e
m
s
 
v
i
s
i
t
e
d
.
 
W
e
 
r
e
t
u
r
n
 
t
o
t
a
l
 
=
 
$
{
t
o
t
a
l
}
.
 
T
h
a
t
 
i
s
 
t
h
e
 
s
u
m
 
o
f
 
[
$
{
S
U
M
_
A
R
R
A
Y
.
j
o
i
n
(
"
,
 
"
)
}
]
.
`
,


 
 
 
 
a
c
t
i
v
e
I
n
d
e
x
:
 
-
1
,


 
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
b
u
i
l
d
S
u
m
F
r
a
m
e
s
(
)
,
 
[
]
)
;


 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
,
 
8
0
0
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
"
T
r
a
c
e
:
 
s
u
m
 
a
l
l
 
e
l
e
m
e
n
t
s
 
o
f
 
a
n
 
a
r
r
a
y
"


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
P
S
E
U
D
O
_
L
I
N
E
S
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
[
"
t
o
t
a
l
"
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
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
l
e
x
 
f
l
e
x
-
c
o
l
 
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
5
"
>


 
 
 
 
 
 
 
 
{
/
*
 
A
r
r
a
y
 
b
o
x
e
s
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v
 
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
l
e
x
 
f
l
e
x
-
c
o
l
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
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
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
a
r
r
a
y
 
a
 
=
 
[
4
,
 
2
,
 
7
]


 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
l
e
x
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
S
U
M
_
A
R
R
A
Y
.
m
a
p
(
(
v
a
l
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
A
c
t
i
v
e
 
=
 
f
r
a
m
e
?
.
a
c
t
i
v
e
I
n
d
e
x
 
=
=
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
d
x
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
l
e
x
 
f
l
e
x
-
c
o
l
 
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
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
1
2
 
h
-
1
2
 
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
o
r
d
e
r
-
2
 
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
i
s
A
c
t
i
v
e
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
 
:
 
T
H
E
M
E
.
b
o
r
d
e
r
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
i
s
A
c
t
i
v
e
 
?
 
"
#
e
c
f
c
c
b
"
 
:
 
T
H
E
M
E
.
b
g
P
a
n
e
l
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
A
c
t
i
v
e
 
?
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
 
:
 
T
H
E
M
E
.
t
e
x
t
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
v
a
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
[
{
i
d
x
}
]


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
c
t
i
v
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
T
H
E
M
E
.
a
c
c
e
n
t
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
R
u
n
n
i
n
g
 
t
o
t
a
l
 
b
a
d
g
e
 
*
/
}


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
f
r
a
m
e
.
v
a
r
s
.
t
o
t
a
l
 
!
=
=
 
"
,
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
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
i
n
l
i
n
e
-
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
3
 
p
x
-
4
 
p
y
-
2
 
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
o
r
d
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


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
C
o
l
o
r
:
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
7
f
e
e
7
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
T
H
E
M
E
.
a
c
c
e
n
t
D
a
r
k
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
t
a
l
 
s
o
 
f
a
r
:


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
x
l
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>
{
f
r
a
m
e
.
v
a
r
s
.
t
o
t
a
l
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
f
u
l
l
"
>


 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
t
r
a
c
e
 
t
h
e
 
a
l
g
o
r
i
t
h
m
 
l
i
n
e
 
b
y
 
l
i
n
e
.
"
}


 
 
 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
q
u
e
s
t
i
o
n
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
x
 
←
 
5
\
n
x
 
←
 
x
 
+
 
3
\
n
r
e
t
u
r
n
 
x
"
,


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
v
a
l
u
e
 
d
o
e
s
 
t
h
i
s
 
r
e
t
u
r
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
3
"
,
 
"
5
"
,
 
"
8
"
,
 
"
1
5
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
x
 
s
t
a
r
t
s
 
a
t
 
5
,
 
t
h
e
n
 
x
 
←
 
5
 
+
 
3
 
=
 
8
.
 
T
h
e
 
a
l
g
o
r
i
t
h
m
 
r
e
t
u
r
n
s
 
8
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
c
o
u
n
t
 
←
 
0
\
n
f
o
r
 
i
 
i
n
 
0
.
.
4
:
\
n
 
 
c
o
u
n
t
 
←
 
c
o
u
n
t
 
+
 
1
\
n
r
e
t
u
r
n
 
c
o
u
n
t
"
,


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
H
o
w
 
m
a
n
y
 
t
i
m
e
s
 
d
o
e
s
 
t
h
e
 
l
o
o
p
 
b
o
d
y
 
r
u
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
3
"
,
 
"
4
"
,
 
"
5
"
,
 
"
0
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
'
"
f
o
r
 
i
 
i
n
 
0
.
.
4
"
 
m
e
a
n
s
 
i
 
t
a
k
e
s
 
t
h
e
 
v
a
l
u
e
s
 
0
,
 
1
,
 
2
,
 
3
,
 
t
h
a
t
 
i
s
 
4
 
i
t
e
r
a
t
i
o
n
s
,
 
n
o
t
 
5
.
 
T
h
e
 
u
p
p
e
r
 
b
o
u
n
d
 
i
s
 
e
x
c
l
u
s
i
v
e
.
'
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
a
 
←
 
1
0
\
n
i
f
 
a
 
>
 
5
:
\
n
 
 
a
 
←
 
a
 
-
 
3
\
n
r
e
t
u
r
n
 
a
"
,


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
d
o
e
s
 
t
h
i
s
 
r
e
t
u
r
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
0
"
,
 
"
5
"
,
 
"
7
"
,
 
"
3
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
a
 
s
t
a
r
t
s
 
a
t
 
1
0
.
 
1
0
 
>
 
5
 
i
s
 
t
r
u
e
,
 
s
o
 
t
h
e
 
i
f
-
b
l
o
c
k
 
r
u
n
s
:
 
a
 
←
 
1
0
 
-
 
3
 
=
 
7
.
 
W
e
 
r
e
t
u
r
n
 
7
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
s
n
i
p
p
e
t
:
 
"
x
 
←
 
1
\
n
w
h
i
l
e
 
x
 
<
 
1
0
:
\
n
 
 
x
 
←
 
x
 
*
 
2
\
n
r
e
t
u
r
n
 
x
"
,


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
v
a
l
u
e
 
d
o
e
s
 
x
 
h
a
v
e
 
w
h
e
n
 
t
h
e
 
l
o
o
p
 
e
x
i
t
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
8
"
,
 
"
1
0
"
,
 
"
1
6
"
,
 
"
1
2
"
]
,


 
 
 
 
 
 
a
n
s
w
e
r
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
i
n
:


 
 
 
 
 
 
 
 
"
x
 
g
o
e
s
:
 
1
,
 
2
,
 
4
,
 
8
,
 
1
6
.
 
A
t
 
1
6
,
 
x
 
<
 
1
0
 
i
s
 
f
a
l
s
e
 
s
o
 
t
h
e
 
l
o
o
p
 
s
t
o
p
s
.
 
x
 
i
s
 
r
e
t
u
r
n
e
d
 
a
s
 
1
6
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
[
p
i
c
k
e
d
,
 
s
e
t
P
i
c
k
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
<
(
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
>
(
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
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
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
F
o
r
 
e
a
c
h
 
s
n
i
p
p
e
t
 
b
e
l
o
w
,
 
t
r
a
c
e
 
t
h
e
 
p
s
e
u
d
o
c
o
d
e
 
l
i
n
e
 
b
y
 
l
i
n
e
 
a
n
d
 
p
r
e
d
i
c
t


 
 
 
 
 
 
 
 
t
h
e
 
a
n
s
w
e
r
 
b
e
f
o
r
e
 
c
l
i
c
k
i
n
g
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
q
u
e
s
t
i
o
n
s
.
m
a
p
(
(
q
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
e
l
 
=
 
p
i
c
k
e
d
[
i
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
C
o
d
e
B
l
o
c
k
 
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
m
b
-
3
"
>
{
q
.
s
n
i
p
p
e
t
}
<
/
C
o
d
e
B
l
o
c
k
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
 
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
5
0
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
q
u
e
s
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
o
p
t
i
o
n
s
.
m
a
p
(
(
o
p
t
,
 
i
d
x
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
q
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
w
r
o
n
g
 
=
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
s
e
l
 
&
&
 
i
d
x
 
!
=
=
 
q
.
a
n
s
w
e
r
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
d
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
p
i
c
k
e
d
]
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
[
i
]
 
=
 
i
d
x
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
P
i
c
k
e
d
(
v
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
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
{
`
p
x
-
3
 
p
y
-
1
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
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
o
n
o
 
f
o
n
t
-
b
o
l
d
 
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
c
o
l
o
r
s
 
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
 
b
o
r
d
e
r
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
r
r
e
c
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
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
l
i
m
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
w
r
o
n
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
r
o
s
e
-
5
0
0
 
b
g
-
r
o
s
e
-
5
0
 
d
a
r
k
:
b
g
-
r
o
s
e
-
5
0
0
/
1
0
 
t
e
x
t
-
r
o
s
e
-
8
0
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
r
o
s
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
i
d
x
 
=
=
=
 
q
.
a
n
s
w
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
b
o
r
d
e
r
-
l
i
m
e
-
5
0
0
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
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
l
i
m
e
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
b
o
r
d
e
r
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
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
b
g
-
w
h
i
t
e
 
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
9
0
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
7
0
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
3
0
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
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
o
r
d
e
r
-
w
h
i
t
e
/
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
l
 
!
=
=
 
n
u
l
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
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
m
t
-
3
"
>
{
q
.
e
x
p
l
a
i
n
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
}
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
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
d
i
v
 
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
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
y
 
p
s
e
u
d
o
c
o
d
e
 
e
x
i
s
t
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
D
i
f
f
e
r
e
n
t
 
t
e
a
m
s
 
u
s
e
 
P
y
t
h
o
n
,
 
J
a
v
a
,
 
G
o
,
 
o
r
 
C
+
+
.
 
I
f
 
a
n
 
a
l
g
o
r
i
t
h
m
 
i
s


 
 
 
 
 
 
 
 
 
 
w
r
i
t
t
e
n
 
i
n
 
P
y
t
h
o
n
,
 
a
 
J
a
v
a
 
d
e
v
e
l
o
p
e
r
 
h
a
s
 
t
o
 
m
e
n
t
a
l
l
y
 
t
r
a
n
s
l
a
t
e
 
i
t
 
b
e
f
o
r
e


 
 
 
 
 
 
 
 
 
 
t
h
e
y
 
c
a
n
 
u
n
d
e
r
s
t
a
n
d
 
i
t
.
 
P
s
e
u
d
o
c
o
d
e
 
s
k
i
p
s
 
a
l
l
 
o
f
 
t
h
a
t
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
t
 
f
o
c
u
s
e
s
 
e
n
t
i
r
e
l
y
 
o
n
 
t
h
e
 
l
o
g
i
c
,
 
t
h
e
 
"
w
h
a
t
 
t
o
 
d
o
"
,
 
w
i
t
h
o
u
t
 
t
h
e


 
 
 
 
 
 
 
 
 
 
l
a
n
g
u
a
g
e
-
s
p
e
c
i
f
i
c
 
s
y
n
t
a
x
 
t
h
a
t
 
o
f
t
e
n
 
d
i
s
t
r
a
c
t
s
 
b
e
g
i
n
n
e
r
s
.
 
Y
o
u
 
c
a
n
 
r
e
a
d


 
 
 
 
 
 
 
 
 
 
a
 
p
s
e
u
d
o
c
o
d
e
 
a
l
g
o
r
i
t
h
m
 
i
n
 
a
n
y
 
p
r
o
g
r
a
m
m
i
n
g
 
t
e
x
t
b
o
o
k
 
a
n
d
 
t
h
e
n
 
i
m
p
l
e
m
e
n
t


 
 
 
 
 
 
 
 
 
 
i
t
 
i
n
 
w
h
i
c
h
e
v
e
r
 
l
a
n
g
u
a
g
e
 
y
o
u
 
k
n
o
w
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
D
i
f
f
e
r
e
n
t
 
b
o
o
k
s
 
u
s
e
 
d
i
f
f
e
r
e
n
t
 
c
o
n
v
e
n
t
i
o
n
s
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
S
o
m
e
 
b
o
o
k
s
 
u
s
e
 
<
I
n
l
i
n
e
C
o
d
e
>
:
=
<
/
I
n
l
i
n
e
C
o
d
e
>
 
f
o
r
 
a
s
s
i
g
n
m
e
n
t
,
 
s
o
m
e
 
u
s
e
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
=
<
/
I
n
l
i
n
e
C
o
d
e
>
,
 
s
o
m
e
 
u
s
e
 
<
I
n
l
i
n
e
C
o
d
e
>
←
<
/
I
n
l
i
n
e
C
o
d
e
>
.
 
S
o
m
e


 
 
 
 
 
 
 
 
 
 
w
r
i
t
e
 
<
I
n
l
i
n
e
C
o
d
e
>
f
o
r
 
i
 
=
 
1
 
t
o
 
n
<
/
I
n
l
i
n
e
C
o
d
e
>
 
(
1
-
b
a
s
e
d
)
,
 
o
t
h
e
r
s
 
w
r
i
t
e
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
<
I
n
l
i
n
e
C
o
d
e
>
f
o
r
 
i
 
i
n
 
0
.
.
n
<
/
I
n
l
i
n
e
C
o
d
e
>
 
(
0
-
b
a
s
e
d
)
.
 
T
h
a
t
 
i
s
 
f
i
n
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
T
h
e
 
s
k
i
l
l
 
y
o
u
 
a
r
e
 
b
u
i
l
d
i
n
g
,
 
r
e
a
d
i
n
g
 
l
o
g
i
c
 
f
r
o
m
 
t
o
p
 
t
o
 
b
o
t
t
o
m
 
a
n
d


 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
i
n
g
 
v
a
r
i
a
b
l
e
 
v
a
l
u
e
s
,
 
t
r
a
n
s
f
e
r
s
 
p
e
r
f
e
c
t
l
y
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
t
h
e


 
 
 
 
 
 
 
 
 
 
n
o
t
a
t
i
o
n
.
 
I
n
 
t
h
i
s
 
c
u
r
r
i
c
u
l
u
m
 
w
e
 
a
l
w
a
y
s
 
u
s
e
 
<
I
n
l
i
n
e
C
o
d
e
>
←
<
/
I
n
l
i
n
e
C
o
d
e
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
a
n
d
 
0
-
b
a
s
e
d
 
r
a
n
g
e
s
 
s
o
 
y
o
u
 
c
a
n
 
f
o
c
u
s
 
o
n
 
t
h
e
 
l
o
g
i
c
,
 
n
o
t
 
t
h
e
 
s
y
m
b
o
l
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
u
n
i
v
e
r
s
a
l
 
t
e
c
h
n
i
q
u
e
:
 
h
a
n
d
-
t
r
a
c
i
n
g
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
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
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
W
h
e
n
e
v
e
r
 
y
o
u
 
a
r
e
 
u
n
s
u
r
e
 
w
h
a
t
 
a
 
p
i
e
c
e
 
o
f
 
c
o
d
e
 
d
o
e
s
,
 
t
r
a
c
e
 
i
t
 
b
y
 
h
a
n
d
.


 
 
 
 
 
 
 
 
 
 
W
r
i
t
e
 
d
o
w
n
 
e
v
e
r
y
 
v
a
r
i
a
b
l
e
 
a
n
d
 
u
p
d
a
t
e
 
i
t
 
a
f
t
e
r
 
e
a
c
h
 
l
i
n
e
.
 
T
h
i
s
 
i
s


 
 
 
 
 
 
 
 
 
 
e
x
a
c
t
l
y
 
w
h
a
t
 
a
 
c
o
m
p
u
t
e
r
 
d
o
e
s
,
 
i
t
 
i
s
 
j
u
s
t
 
s
l
o
w
e
r
 
a
n
d
 
m
o
r
e
 
v
i
s
i
b
l
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
<
o
l
 
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
l
i
s
t
-
d
e
c
i
m
a
l
 
p
l
-
5
 
s
p
a
c
e
-
y
-
1
 
t
e
x
t
-
s
m
 
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
6
0
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
r
i
t
e
 
t
h
e
 
v
a
r
i
a
b
l
e
 
n
a
m
e
s
 
a
s
 
c
o
l
u
m
n
 
h
e
a
d
e
r
s
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
t
a
r
t
 
a
 
n
e
w
 
r
o
w
 
f
o
r
 
e
a
c
h
 
l
i
n
e
 
t
h
a
t
 
c
h
a
n
g
e
s
 
a
 
v
a
r
i
a
b
l
e
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
F
o
r
 
l
o
o
p
s
,
 
a
d
d
 
a
 
r
o
w
 
f
o
r
 
e
a
c
h
 
i
t
e
r
a
t
i
o
n
.
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
S
t
o
p
 
w
h
e
n
 
y
o
u
 
h
i
t
 
<
I
n
l
i
n
e
C
o
d
e
>
r
e
t
u
r
n
<
/
I
n
l
i
n
e
C
o
d
e
>
.
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
o
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>




 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
I
n
t
e
r
v
i
e
w
 
t
i
p
:
<
/
s
t
r
o
n
g
>
 
w
h
i
t
e
b
o
a
r
d
 
i
n
t
e
r
v
i
e
w
s
 
o
f
t
e
n
 
s
t
a
r
t
 
i
n


 
 
 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
 
b
e
f
o
r
e
 
a
n
y
 
s
p
e
c
i
f
i
c
 
l
a
n
g
u
a
g
e
.
 
B
e
i
n
g
 
c
o
m
f
o
r
t
a
b
l
e
 
r
e
a
d
i
n
g
 
a
n
d


 
 
 
 
 
 
 
 
w
r
i
t
i
n
g
 
p
s
e
u
d
o
c
o
d
e
 
m
e
a
n
s
 
y
o
u
 
c
a
n
 
t
h
i
n
k
 
o
u
t
 
l
o
u
d
 
a
b
o
u
t
 
y
o
u
r
 
a
l
g
o
r
i
t
h
m


 
 
 
 
 
 
 
 
b
e
f
o
r
e
 
w
o
r
r
y
i
n
g
 
a
b
o
u
t
 
s
y
n
t
a
x
 
e
r
r
o
r
s
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
S
h
e
l
l
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




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
 
L
0
_
R
e
a
d
i
n
g
P
s
e
u
d
o
c
o
d
e
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
l
e
a
r
n
"
,


 
 
 
 
 
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,


 
 
 
 
 
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
n
 
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
"
 
/
>
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,


 
 
 
 
 
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,


 
 
 
 
 
 
i
c
o
n
:
 
<
P
l
a
y
 
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
"
 
/
>
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
t
r
y
"
,


 
 
 
 
 
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,


 
 
 
 
 
 
i
c
o
n
:
 
<
T
a
r
g
e
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
"
 
/
>
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,


 
 
 
 
 
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,


 
 
 
 
 
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
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
"
 
/
>
,


 
 
 
 
 
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
,


 
 
 
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
'
I
n
 
p
s
e
u
d
o
c
o
d
e
,
 
w
h
a
t
 
d
o
e
s
 
"
←
"
 
m
e
a
n
?
'
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
L
e
s
s
 
t
h
a
n
 
o
r
 
e
q
u
a
l
 
t
o
"
,


 
 
 
 
 
 
 
 
"
R
e
t
u
r
n
 
t
h
i
s
 
v
a
l
u
e
"
,


 
 
 
 
 
 
 
 
"
A
s
s
i
g
n
 
a
 
v
a
l
u
e
 
t
o
 
a
 
v
a
r
i
a
b
l
e
"
,


 
 
 
 
 
 
 
 
"
A
 
c
o
m
p
a
r
i
s
o
n
 
(
i
s
 
l
e
f
t
 
e
q
u
a
l
 
t
o
 
r
i
g
h
t
?
)
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
'
"
←
"
 
i
s
 
t
h
e
 
a
s
s
i
g
n
m
e
n
t
 
o
p
e
r
a
t
o
r
.
 
"
x
 
←
 
5
"
 
m
e
a
n
s
:
 
s
t
o
r
e
 
t
h
e
 
v
a
l
u
e
 
5
 
i
n
 
t
h
e
 
v
a
r
i
a
b
l
e
 
x
.
 
I
t
 
i
s
 
e
q
u
i
v
a
l
e
n
t
 
t
o
 
"
x
 
=
 
5
"
 
i
n
 
P
y
t
h
o
n
 
o
r
 
J
a
v
a
S
c
r
i
p
t
.
'
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
'
W
h
a
t
 
d
o
e
s
 
"
f
o
r
 
i
 
i
n
 
0
.
.
n
"
 
m
e
a
n
 
w
h
e
n
 
n
 
=
 
3
?
'
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
i
 
t
a
k
e
s
 
v
a
l
u
e
s
 
1
,
 
2
,
 
3
"
,


 
 
 
 
 
 
 
 
"
i
 
t
a
k
e
s
 
v
a
l
u
e
s
 
0
,
 
1
,
 
2
"
,


 
 
 
 
 
 
 
 
"
i
 
t
a
k
e
s
 
v
a
l
u
e
s
 
0
,
 
1
,
 
2
,
 
3
"
,


 
 
 
 
 
 
 
 
"
T
h
e
 
l
o
o
p
 
r
u
n
s
 
i
n
f
i
n
i
t
e
l
y
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
'
"
0
.
.
n
"
 
m
e
a
n
s
 
f
r
o
m
 
0
 
u
p
 
t
o
 
(
b
u
t
 
n
o
t
 
i
n
c
l
u
d
i
n
g
)
 
n
.
 
W
i
t
h
 
n
 
=
 
3
,
 
i
 
i
s
 
0
,
 
t
h
e
n
 
1
,
 
t
h
e
n
 
2
,
 
t
h
r
e
e
 
i
t
e
r
a
t
i
o
n
s
 
t
o
t
a
l
.
'
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:


 
 
 
 
 
 
 
 
"
T
r
a
c
e
 
t
h
i
s
 
s
n
i
p
p
e
t
:
\
n
\
n
x
 
←
 
2
\
n
w
h
i
l
e
 
x
 
<
 
2
0
:
\
n
 
 
x
 
←
 
x
 
*
 
3
\
n
r
e
t
u
r
n
 
x
\
n
\
n
W
h
a
t
 
i
s
 
r
e
t
u
r
n
e
d
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
1
8
"
,
 
"
2
0
"
,
 
"
5
4
"
,
 
"
6
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
x
 
g
o
e
s
:
 
2
 
→
 
6
 
→
 
1
8
 
→
 
5
4
.
 
A
t
 
5
4
,
 
x
 
<
 
2
0
 
i
s
 
f
a
l
s
e
 
s
o
 
t
h
e
 
l
o
o
p
 
e
x
i
t
s
 
a
n
d
 
5
4
 
i
s
 
r
e
t
u
r
n
e
d
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
 
p
s
e
u
d
o
c
o
d
e
,
 
w
h
a
t
 
r
o
l
e
 
d
o
e
s
 
i
n
d
e
n
t
a
t
i
o
n
 
p
l
a
y
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
I
t
 
i
s
 
p
u
r
e
l
y
 
d
e
c
o
r
a
t
i
v
e
,
 
t
h
e
 
c
o
m
p
u
t
e
r
 
i
g
n
o
r
e
s
 
i
t
"
,


 
 
 
 
 
 
 
 
"
I
t
 
s
h
o
w
s
 
w
h
i
c
h
 
s
t
e
p
s
 
b
e
l
o
n
g
 
i
n
s
i
d
e
 
a
 
l
o
o
p
 
o
r
 
i
f
-
b
l
o
c
k
 
(
s
c
o
p
e
)
"
,


 
 
 
 
 
 
 
 
"
I
t
 
i
n
d
i
c
a
t
e
s
 
t
h
e
 
o
r
d
e
r
 
i
n
 
w
h
i
c
h
 
s
t
e
p
s
 
r
u
n
,
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
s
t
r
u
c
t
u
r
e
"
,


 
 
 
 
 
 
 
 
"
I
t
 
m
a
r
k
s
 
l
i
n
e
s
 
t
h
a
t
 
s
h
o
u
l
d
 
b
e
 
s
k
i
p
p
e
d
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
I
n
 
p
s
e
u
d
o
c
o
d
e
 
(
a
n
d
 
i
n
 
P
y
t
h
o
n
,
 
w
h
i
c
h
 
f
o
l
l
o
w
s
 
t
h
e
 
s
a
m
e
 
r
u
l
e
)
,
 
i
n
d
e
n
t
a
t
i
o
n
 
d
e
f
i
n
e
s
 
s
c
o
p
e
.
 
I
n
d
e
n
t
e
d
 
l
i
n
e
s
 
a
r
e
 
i
n
s
i
d
e
 
t
h
e
 
b
l
o
c
k
 
a
b
o
v
e
 
t
h
e
m
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:


 
 
 
 
 
 
 
 
"
T
r
a
c
e
 
t
h
i
s
 
s
n
i
p
p
e
t
:
\
n
\
n
t
o
t
a
l
 
←
 
0
\
n
f
o
r
 
i
 
i
n
 
0
.
.
4
:
\
n
 
 
t
o
t
a
l
 
←
 
t
o
t
a
l
 
+
 
i
\
n
r
e
t
u
r
n
 
t
o
t
a
l
\
n
\
n
W
h
a
t
 
d
o
e
s
 
i
t
 
r
e
t
u
r
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
4
"
,
 
"
6
"
,
 
"
1
0
"
,
 
"
0
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:


 
 
 
 
 
 
 
 
"
i
 
t
a
k
e
s
 
v
a
l
u
e
s
 
0
,
 
1
,
 
2
,
 
3
 
(
f
o
u
r
 
i
t
e
r
a
t
i
o
n
s
)
.
 
t
o
t
a
l
 
=
 
0
+
1
+
2
+
3
 
=
 
6
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
R
e
a
d
i
n
g
 
P
s
e
u
d
o
c
o
d
e
"


 
 
 
 
 
 
l
e
v
e
l
=
{
0
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
2
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
W
h
i
t
e
b
o
a
r
d
 
i
n
t
e
r
v
i
e
w
s
 
o
f
t
e
n
 
s
t
a
r
t
 
i
n
 
p
s
e
u
d
o
c
o
d
e
 
b
e
f
o
r
e
 
y
o
u
 
c
o
d
e
 
i
n
 
y
o
u
r
 
l
a
n
g
u
a
g
e
 
o
f
 
c
h
o
i
c
e
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
V
a
r
i
a
b
l
e
s
,
 
M
e
m
o
r
y
 
&
 
R
e
f
e
r
e
n
c
e
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


