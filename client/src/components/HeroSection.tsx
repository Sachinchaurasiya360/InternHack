
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
 
A
r
r
o
w
R
i
g
h
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
i
n
k
 
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
 
u
s
e
A
u
t
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
.
/
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;




c
o
n
s
t
 
f
a
d
e
I
n
U
p
 
=
 
{


 
 
h
i
d
d
e
n
:
 
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
4
0
 
}
,


 
 
v
i
s
i
b
l
e
:
 
(
i
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
 
(
{


 
 
 
 
o
p
a
c
i
t
y
:
 
1
,


 
 
 
 
y
:
 
0
,


 
 
 
 
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
:
 
{
 
d
e
l
a
y
:
 
i
 
*
 
0
.
1
5
,
 
d
u
r
a
t
i
o
n
:
 
0
.
6
,
 
e
a
s
e
:
 
[
0
.
2
2
,
 
1
,
 
0
.
3
6
,
 
1
]
 
a
s
 
c
o
n
s
t
 
}
,


 
 
}
)
,


}
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
 
H
e
r
o
S
e
c
t
i
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
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
,
 
u
s
e
r
 
}
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
)
;




 
 
c
o
n
s
t
 
g
e
t
S
t
a
r
t
e
d
H
r
e
f
 
=
 
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d


 
 
 
 
?
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
A
D
M
I
N
"


 
 
 
 
 
 
?
 
"
/
a
d
m
i
n
"


 
 
 
 
 
 
:
 
u
s
e
r
?
.
r
o
l
e
 
=
=
=
 
"
R
E
C
R
U
I
T
E
R
"


 
 
 
 
 
 
?
 
"
/
r
e
c
r
u
i
t
e
r
s
"


 
 
 
 
 
 
:
 
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
p
p
l
i
c
a
t
i
o
n
s
"


 
 
 
 
:
 
"
/
r
e
g
i
s
t
e
r
"
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
e
c
t
i
o
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
r
e
l
a
t
i
v
e
 
m
i
n
-
h
-
s
c
r
e
e
n
 
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
 
b
g
-
[
#
f
a
f
a
f
a
]
 
d
a
r
k
:
b
g
-
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
{
/
*
 
G
r
a
d
i
e
n
t
 
o
r
b
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
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
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
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
a
b
s
o
l
u
t
e
 
-
t
o
p
-
4
0
 
-
r
i
g
h
t
-
4
0
 
w
-
1
5
0
 
h
-
1
5
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
l
i
n
e
a
r
-
t
o
-
b
r
 
f
r
o
m
-
i
n
d
i
g
o
-
1
0
0
 
t
o
-
v
i
o
l
e
t
-
1
0
0
 
d
a
r
k
:
f
r
o
m
-
i
n
d
i
g
o
-
9
0
0
/
3
0
 
d
a
r
k
:
t
o
-
v
i
o
l
e
t
-
9
0
0
/
3
0
 
o
p
a
c
i
t
y
-
6
0
 
b
l
u
r
-
3
x
l
"
 
/
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
4
0
 
-
l
e
f
t
-
4
0
 
w
-
1
2
5
 
h
-
1
2
5
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
g
-
l
i
n
e
a
r
-
t
o
-
t
r
 
f
r
o
m
-
s
l
a
t
e
-
1
0
0
 
t
o
-
b
l
u
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
f
r
o
m
-
s
l
a
t
e
-
9
0
0
/
3
0
 
d
a
r
k
:
t
o
-
b
l
u
e
-
9
0
0
/
3
0
 
o
p
a
c
i
t
y
-
6
0
 
b
l
u
r
-
3
x
l
"
 
/
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
a
b
s
o
l
u
t
e
 
t
o
p
-
1
/
2
 
l
e
f
t
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
x
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
2
0
0
 
h
-
2
0
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
b
l
a
c
k
/
3
 
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
3
"
 
/
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
a
b
s
o
l
u
t
e
 
t
o
p
-
1
/
2
 
l
e
f
t
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
x
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
w
-
2
5
0
 
h
-
2
5
0
 
r
o
u
n
d
e
d
-
f
u
l
l
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
b
l
a
c
k
/
2
 
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
2
"
 
/
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
 
G
r
i
d
 
p
a
t
t
e
r
n
 
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
o
p
a
c
i
t
y
-
[
0
.
0
3
]
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
a
c
k
g
r
o
u
n
d
I
m
a
g
e
:


 
 
 
 
 
 
 
 
 
 
 
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
#
0
0
0
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
,
 
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
9
0
d
e
g
,
 
#
0
0
0
 
1
p
x
,
 
t
r
a
n
s
p
a
r
e
n
t
 
1
p
x
)
"
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
S
i
z
e
:
 
"
6
4
p
x
 
6
4
p
x
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
/
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
r
e
l
a
t
i
v
e
 
z
-
1
0
 
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
 
p
x
-
4
 
s
m
:
p
x
-
6
 
p
t
-
2
4
 
s
m
:
p
t
-
3
2
 
p
b
-
1
6
 
s
m
:
p
b
-
2
0
 
t
e
x
t
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
h
1


 
 
 
 
 
 
 
 
 
 
c
u
s
t
o
m
=
{
0
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
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
o
n
t
-
d
i
s
p
l
a
y
 
t
e
x
t
-
3
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
m
d
:
t
e
x
t
-
7
x
l
 
f
o
n
t
-
b
o
l
d
 
l
e
a
d
i
n
g
-
[
1
.
0
5
]
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
g
r
a
y
-
9
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
w
h
i
t
e
 
m
b
-
6
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
A
I
-
P
o
w
e
r
e
d
 
I
n
t
e
r
n
s
h
i
p
 
&


 
 
 
 
 
 
 
 
 
 
<
b
r
 
/
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
g
r
a
d
i
e
n
t
-
a
c
c
e
n
t
"
>
C
a
r
e
e
r
 
P
l
a
t
f
o
r
m
 
f
o
r
 
S
t
u
d
e
n
t
s
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
h
1
>




 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
p


 
 
 
 
 
 
 
 
 
 
c
u
s
t
o
m
=
{
1
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
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
g
 
s
m
:
t
e
x
t
-
x
l
 
t
e
x
t
-
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
m
a
x
-
w
-
2
x
l
 
m
x
-
a
u
t
o
 
m
b
-
1
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


 
 
 
 
 
 
 
 
 
 
B
r
o
w
s
e
 
c
u
r
a
t
e
d
 
j
o
b
s
,
 
f
o
l
l
o
w
 
g
u
i
d
e
d
 
c
a
r
e
e
r
 
r
o
a
d
m
a
p
s
,
 
s
c
o
r
e
 
y
o
u
r
 
r
e
s
u
m
e


 
 
 
 
 
 
 
 
 
 
w
i
t
h
 
A
I
,
 
a
n
d
 
c
o
n
n
e
c
t
 
d
i
r
e
c
t
l
y
 
w
i
t
h
 
r
e
c
r
u
i
t
e
r
s
 
a
l
l
 
i
n
 
o
n
e
 
p
l
a
t
f
o
r
m
.


 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
p
>




 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
c
u
s
t
o
m
=
{
2
}


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
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
 
s
m
:
f
l
e
x
-
r
o
w
 
g
a
p
-
4
 
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
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
g
e
t
S
t
a
r
t
e
d
H
r
e
f
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
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
3
,
 
y
:
 
-
2
 
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
8
 
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
"
p
x
-
8
 
p
y
-
4
 
b
g
-
g
r
a
y
-
9
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
w
h
i
t
e
 
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
g
r
a
y
-
9
5
0
 
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
s
e
m
i
b
o
l
d
 
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
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
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
g
r
a
y
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
b
l
a
c
k
/
1
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
A
u
t
h
e
n
t
i
c
a
t
e
d
 
?
 
"
G
o
 
t
o
 
D
a
s
h
b
o
a
r
d
"
 
:
 
"
G
e
t
 
S
t
a
r
t
e
d
 
F
r
e
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
R
i
g
h
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


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
j
o
b
s
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
n
o
-
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
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
3
,
 
y
:
 
-
2
 
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
8
 
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
"
p
x
-
8
 
p
y
-
4
 
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
g
r
a
y
-
9
0
0
 
t
e
x
t
-
g
r
a
y
-
9
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
w
h
i
t
e
 
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
s
e
m
i
b
o
l
d
 
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
o
r
d
e
r
 
b
o
r
d
e
r
-
g
r
a
y
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
g
r
a
y
-
7
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
g
r
a
y
-
3
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
g
r
a
y
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
s
h
a
d
o
w
-
m
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


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
B
r
o
w
s
e
 
J
o
b
s


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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


 
 
 
 
<
/
s
e
c
t
i
o
n
>


 
 
)
;


}


