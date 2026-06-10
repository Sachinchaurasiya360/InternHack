
i
m
p
o
r
t
 
*
 
a
s
 
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
 
*
 
a
s
 
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
 
f
r
o
m
 
"
@
r
a
d
i
x
-
u
i
/
r
e
a
c
t
-
p
o
p
o
v
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
 
c
n
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
u
t
i
l
s
"
;




f
u
n
c
t
i
o
n
 
P
o
p
o
v
e
r
(
{


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
t
y
p
e
o
f
 
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
R
o
o
t
>
)
 
{


 
 
r
e
t
u
r
n
 
<
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
R
o
o
t
 
d
a
t
a
-
s
l
o
t
=
"
p
o
p
o
v
e
r
"
 
{
.
.
.
p
r
o
p
s
}
 
/
>
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
 
P
o
p
o
v
e
r
T
r
i
g
g
e
r
(
{


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
t
y
p
e
o
f
 
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
T
r
i
g
g
e
r
>
)
 
{


 
 
r
e
t
u
r
n
 
<
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
T
r
i
g
g
e
r
 
d
a
t
a
-
s
l
o
t
=
"
p
o
p
o
v
e
r
-
t
r
i
g
g
e
r
"
 
{
.
.
.
p
r
o
p
s
}
 
/
>
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
 
P
o
p
o
v
e
r
C
o
n
t
e
n
t
(
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
,


 
 
a
l
i
g
n
 
=
 
"
c
e
n
t
e
r
"
,


 
 
s
i
d
e
O
f
f
s
e
t
 
=
 
4
,


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
t
y
p
e
o
f
 
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
C
o
n
t
e
n
t
>
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
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
P
o
r
t
a
l
>


 
 
 
 
 
 
<
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
C
o
n
t
e
n
t


 
 
 
 
 
 
 
 
d
a
t
a
-
s
l
o
t
=
"
p
o
p
o
v
e
r
-
c
o
n
t
e
n
t
"


 
 
 
 
 
 
 
 
a
l
i
g
n
=
{
a
l
i
g
n
}


 
 
 
 
 
 
 
 
s
i
d
e
O
f
f
s
e
t
=
{
s
i
d
e
O
f
f
s
e
t
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
c
n
(


 
 
 
 
 
 
 
 
 
 
"
z
-
5
0
 
w
-
7
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
g
r
a
y
-
9
5
0
 
s
h
a
d
o
w
-
x
l
 
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
 
d
a
r
k
:
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
4
0
"
,


 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
[
s
t
a
t
e
=
o
p
e
n
]
:
a
n
i
m
a
t
e
-
i
n
 
d
a
t
a
-
[
s
t
a
t
e
=
c
l
o
s
e
d
]
:
a
n
i
m
a
t
e
-
o
u
t
"
,


 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
[
s
t
a
t
e
=
c
l
o
s
e
d
]
:
f
a
d
e
-
o
u
t
-
0
 
d
a
t
a
-
[
s
t
a
t
e
=
o
p
e
n
]
:
f
a
d
e
-
i
n
-
0
"
,


 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
[
s
t
a
t
e
=
c
l
o
s
e
d
]
:
z
o
o
m
-
o
u
t
-
9
5
 
d
a
t
a
-
[
s
t
a
t
e
=
o
p
e
n
]
:
z
o
o
m
-
i
n
-
9
5
"
,


 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
[
s
i
d
e
=
b
o
t
t
o
m
]
:
s
l
i
d
e
-
i
n
-
f
r
o
m
-
t
o
p
-
2
 
d
a
t
a
-
[
s
i
d
e
=
l
e
f
t
]
:
s
l
i
d
e
-
i
n
-
f
r
o
m
-
r
i
g
h
t
-
2
"
,


 
 
 
 
 
 
 
 
 
 
"
d
a
t
a
-
[
s
i
d
e
=
r
i
g
h
t
]
:
s
l
i
d
e
-
i
n
-
f
r
o
m
-
l
e
f
t
-
2
 
d
a
t
a
-
[
s
i
d
e
=
t
o
p
]
:
s
l
i
d
e
-
i
n
-
f
r
o
m
-
b
o
t
t
o
m
-
2
"
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


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
{
.
.
.
p
r
o
p
s
}


 
 
 
 
 
 
/
>


 
 
 
 
<
/
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
P
o
r
t
a
l
>


 
 
)
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
 
P
o
p
o
v
e
r
H
e
a
d
e
r
(
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
,
 
.
.
.
p
r
o
p
s
 
}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
"
d
i
v
"
>
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
{
c
n
(


 
 
 
 
 
 
 
 
"
f
l
e
x
 
w
-
f
u
l
l
 
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
1
 
r
o
u
n
d
e
d
-
t
-
x
l
 
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
w
h
i
t
e
/
1
0
 
p
x
-
3
 
p
y
-
2
"
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


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
.
.
.
p
r
o
p
s
}


 
 
 
 
/
>


 
 
)
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
 
P
o
p
o
v
e
r
T
i
t
l
e
(
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
,
 
.
.
.
p
r
o
p
s
 
}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
"
p
"
>
)
 
{


 
 
r
e
t
u
r
n
 
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
{
c
n
(
"
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
 
f
o
n
t
-
m
e
d
i
u
m
"
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
)
}
 
{
.
.
.
p
r
o
p
s
}
 
/
>
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
 
P
o
p
o
v
e
r
D
e
s
c
r
i
p
t
i
o
n
(
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
,


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
"
p
"
>
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
{
c
n
(
"
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
w
h
i
t
e
/
5
0
 
t
e
x
t
-
s
m
"
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
)
}
 
{
.
.
.
p
r
o
p
s
}
 
/
>


 
 
)
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
 
P
o
p
o
v
e
r
F
o
o
t
e
r
(
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
,
 
.
.
.
p
r
o
p
s
 
}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
"
d
i
v
"
>
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
{
c
n
(


 
 
 
 
 
 
 
 
"
m
t
-
a
u
t
o
 
g
r
i
d
 
w
-
f
u
l
l
 
g
a
p
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
b
-
x
l
 
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
w
h
i
t
e
/
1
0
 
p
x
-
3
 
p
y
-
2
"
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


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
.
.
.
p
r
o
p
s
}


 
 
 
 
/
>


 
 
)
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
 
P
o
p
o
v
e
r
B
o
d
y
(
{


 
 
c
h
i
l
d
r
e
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
,


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
"
d
i
v
"
>
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
{
c
n
(
"
p
-
3
"
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
)
}
 
{
.
.
.
p
r
o
p
s
}
>


 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
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




f
u
n
c
t
i
o
n
 
P
o
p
o
v
e
r
A
n
c
h
o
r
(
{


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
t
y
p
e
o
f
 
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
A
n
c
h
o
r
>
)
 
{


 
 
r
e
t
u
r
n
 
<
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
A
n
c
h
o
r
 
d
a
t
a
-
s
l
o
t
=
"
p
o
p
o
v
e
r
-
a
n
c
h
o
r
"
 
{
.
.
.
p
r
o
p
s
}
 
/
>
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
 
P
o
p
o
v
e
r
C
l
o
s
e
(
{


 
 
.
.
.
p
r
o
p
s


}
:
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
P
r
o
p
s
<
t
y
p
e
o
f
 
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
C
l
o
s
e
>
)
 
{


 
 
r
e
t
u
r
n
 
<
P
o
p
o
v
e
r
P
r
i
m
i
t
i
v
e
.
C
l
o
s
e
 
d
a
t
a
-
s
l
o
t
=
"
p
o
p
o
v
e
r
-
c
l
o
s
e
"
 
{
.
.
.
p
r
o
p
s
}
 
/
>
;


}




e
x
p
o
r
t
 
{


 
 
P
o
p
o
v
e
r
,


 
 
P
o
p
o
v
e
r
T
r
i
g
g
e
r
,


 
 
P
o
p
o
v
e
r
C
o
n
t
e
n
t
,


 
 
P
o
p
o
v
e
r
B
o
d
y
,


 
 
P
o
p
o
v
e
r
H
e
a
d
e
r
,


 
 
P
o
p
o
v
e
r
T
i
t
l
e
,


 
 
P
o
p
o
v
e
r
D
e
s
c
r
i
p
t
i
o
n
,


 
 
P
o
p
o
v
e
r
F
o
o
t
e
r
,


 
 
P
o
p
o
v
e
r
A
n
c
h
o
r
,


 
 
P
o
p
o
v
e
r
C
l
o
s
e
,


}
;


