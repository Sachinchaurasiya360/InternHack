
i
m
p
o
r
t
 
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




i
n
t
e
r
f
a
c
e
 
T
e
s
t
i
m
o
n
i
a
l
 
{


 
 
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
;


 
 
i
m
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


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
r
o
l
e
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
 
T
e
s
t
i
m
o
n
i
a
l
s
C
o
l
u
m
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


 
 
t
e
s
t
i
m
o
n
i
a
l
s
,


 
 
d
u
r
a
t
i
o
n
 
=
 
1
0
,


}
:
 
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
?
:
 
s
t
r
i
n
g
;


 
 
t
e
s
t
i
m
o
n
i
a
l
s
:
 
T
e
s
t
i
m
o
n
i
a
l
[
]
;


 
 
d
u
r
a
t
i
o
n
?
:
 
n
u
m
b
e
r
;


}
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
 
t
r
a
n
s
l
a
t
e
Y
:
 
"
-
5
0
%
"
 
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
u
r
a
t
i
o
n
,


 
 
 
 
 
 
 
 
 
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
,


 
 
 
 
 
 
 
 
 
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
,


 
 
 
 
 
 
 
 
 
 
r
e
p
e
a
t
T
y
p
e
:
 
"
l
o
o
p
"
,


 
 
 
 
 
 
 
 
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
6
 
p
b
-
6
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
[
.
.
.
n
e
w
 
A
r
r
a
y
(
2
)
]
.
m
a
p
(
(
_
,
 
i
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
R
e
a
c
t
.
F
r
a
g
m
e
n
t
 
k
e
y
=
{
i
n
d
e
x
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
s
t
i
m
o
n
i
a
l
s
.
m
a
p
(
(
{
 
t
e
x
t
,
 
i
m
a
g
e
,
 
n
a
m
e
,
 
r
o
l
e
 
}
,
 
i
)
 
=
>
 
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
p
-
6
 
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
 
m
a
x
-
w
-
x
s
 
w
-
f
u
l
l
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
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
 
m
b
-
4
 
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
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
,
 
3
,
 
4
]
.
m
a
p
(
(
n
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
v
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
n
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
w
-
3
.
5
 
h
-
3
.
5
 
f
i
l
l
-
c
u
r
r
e
n
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
i
e
w
B
o
x
=
"
0
 
0
 
2
4
 
2
4
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
1
2
 
2
l
3
.
0
9
 
6
.
2
6
L
2
2
 
9
.
2
7
l
-
5
 
4
.
8
7
 
1
.
1
8
 
6
.
8
8
L
1
2
 
1
7
.
7
7
l
-
6
.
1
8
 
3
.
2
5
L
7
 
1
4
.
1
4
 
2
 
9
.
2
7
l
6
.
9
1
-
1
.
0
1
L
1
2
 
2
z
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
e
x
t
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
 
m
t
-
5
 
p
t
-
5
 
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
i
m
g


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
4
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
r
c
=
{
i
m
a
g
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
l
t
=
{
n
a
m
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
h
-
1
0
 
w
-
1
0
 
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
 
o
b
j
e
c
t
-
c
o
v
e
r
 
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
"
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
 
l
e
a
d
i
n
g
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
l
e
a
d
i
n
g
-
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
o
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
R
e
a
c
t
.
F
r
a
g
m
e
n
t
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
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


 
 
)
;


}


